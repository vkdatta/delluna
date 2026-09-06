export const name="person-simple-light";
export const id="dl_ad39c367453a4c97ad9d";
export const url=new URL("../icons/person-simple-light.svg?v=437925e7a6f78117cc68f1c83cfb630374972a6601015e4f3bc95b14ccdb0193",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
