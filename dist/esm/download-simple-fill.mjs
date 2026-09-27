export const name="download-simple-fill";
export const id="dl_3c33996f196c4540b78f";
export const url=new URL("../icons/download-simple-fill.svg?v=ec1c64e5a0cc51a829314e0fd4a614e155fb4c594fe3a7b16a997e415db00eaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
