export const name="guitar-fill";
export const id="dl_7084c5a0b58f43e98539";
export const url=new URL("../icons/guitar-fill.svg?v=cfe2bbd259ca250cece76fc13341f8fd950c8991633600c74d176f859f89366c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
