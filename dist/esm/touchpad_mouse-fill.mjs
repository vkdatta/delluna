export const name="touchpad_mouse-fill";
export const id="dl_2b7741dbb077692be5a3";
export const url=new URL("../icons/touchpad_mouse-fill.svg?v=0a54290625291ef19cde65f409c6ff93bb5cb906a190f94f6fea7de54ac37090",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
