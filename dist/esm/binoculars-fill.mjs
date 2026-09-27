export const name="binoculars-fill";
export const id="dl_c53be58c266943ff94e1";
export const url=new URL("../icons/binoculars-fill.svg?v=1997a63daeb06eaf450a9988828a7d7a6ff0181d0f6cf72fe583714f4a4ce913",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
