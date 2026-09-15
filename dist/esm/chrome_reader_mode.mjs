export const name="chrome_reader_mode";
export const id="dl_2d09e7f9946949f4a459";
export const url=new URL("../icons/C/chrome_reader_mode.svg?v=0b81e4ee8e6f291d5531bb33257ae0b9c176e1cad8a1a32272ce3bb056aaf296",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
