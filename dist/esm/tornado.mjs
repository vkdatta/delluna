export const name="tornado";
export const id="dl_20a3f3919747f16f9b1e";
export const url=new URL("../icons/tornado.svg?v=28ddda219136d9ec384d4066609bafc91ec7f9863fe2905eddfe2146ab9865a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
