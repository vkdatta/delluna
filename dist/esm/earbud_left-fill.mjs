export const name="earbud_left-fill";
export const id="dl_c08609081d21c812f96f";
export const url=new URL("../icons/earbud_left-fill.svg?v=fb201eaf26b0c9b1cd0342eee84ea73b6a3461d1ab644fcd6a90ff1bd785278f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
