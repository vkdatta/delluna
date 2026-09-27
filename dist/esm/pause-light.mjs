export const name="pause-light";
export const id="dl_f9872728d8ce45e480e7";
export const url=new URL("../icons/pause-light.svg?v=1b0471767a9ad7ab0cf9d3affef66f8bd296ececf0d7e9b687941969df61bb1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
