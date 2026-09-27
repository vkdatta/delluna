export const name="monorail";
export const id="dl_b090d4b766d5356aa74b";
export const url=new URL("../icons/monorail.svg?v=4c2c426f6c2bfc29a761ab768d1986713ee395f558acb28547952046de51e24b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
