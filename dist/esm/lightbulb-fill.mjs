export const name="lightbulb-fill";
export const id="dl_482bae43798e499fad04";
export const url=new URL("../icons/lightbulb-fill.svg?v=6b05b00db356e6687c84e34db9c8f3d608adc8e6e7b41e1ac4da1060649a5275",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
