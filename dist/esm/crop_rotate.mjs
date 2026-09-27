export const name="crop_rotate";
export const id="dl_c8c977ff7fec74081775";
export const url=new URL("../icons/crop_rotate.svg?v=8c32e9be707474a2bfb380ba052340dbfcb9ea3c76d6c1062f018c155e3871ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
