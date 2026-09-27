export const name="format_shapes";
export const id="dl_4037236b41b414d1d0a3";
export const url=new URL("../icons/format_shapes.svg?v=5737b1086710ae71febcd671e2620773506a2d1032bb157c80a6b51207673d17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
