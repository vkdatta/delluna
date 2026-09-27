export const name="chat-circle-text-light";
export const id="dl_e8fa76466abf4655b0d3";
export const url=new URL("../icons/chat-circle-text-light.svg?v=96a97a79c3c44b7e1a7192d65ec3256026f76cad9388ebab026c7371e90fd44d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
