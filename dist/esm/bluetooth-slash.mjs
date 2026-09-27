export const name="bluetooth-slash";
export const id="dl_bb7dd3a055304678b81e";
export const url=new URL("../icons/bluetooth-slash.svg?v=c5c41ef1923b3ddf358812632eb1f8c00229ec8ea577e9dc18e7ae9472e711ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
