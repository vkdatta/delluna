export const name="pause-light";
export const id="dl_f9872728d8ce45e480e7";
export const url=new URL("../icons/pause-light.svg?v=147247f306ee08381b5f43bfd2dda840b7f4d798e264eac86c3bb8ca6b0c3092",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
