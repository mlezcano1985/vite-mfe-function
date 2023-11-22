import { createApp } from "vue";
import "./style.css";

export default function render(rootComponent, el) {
  createApp(rootComponent).mount(el);
}
