var app=app||{};app.TodoView=Backbone.View.extend({tagName:"li",template:_.template($("#item-template").html()),render:function(){return this.$el.html(this.template(this.model.toJSON())),this.input=this.$(".edit"),this},initialize:function(){this.model.on("change",this.render,this),this.model.on("destroy",this.remove,this)},events:{"dblclick label":"edit","keypress .edit":"updateOnEnter","blur .edit":"close","click .toggle":"toggleCompleted","click .destroy":"destroy"},edit:function(){this.$el.addClass("editing"),this.input.focus()},close:function(){var t=this.input.val().trim();t&&this.model.save({title:t}),this.$el.removeClass("editing")},updateOnEnter:function(t){13==t.which&&this.close()},toggleCompleted:function(){this.model.toggle()},destroy:function(){this.model.destroy()}});