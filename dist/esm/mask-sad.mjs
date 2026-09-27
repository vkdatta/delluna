export const name="mask-sad";
export const id="dl_f9ce8cde71664547bec3";
export const url=new URL("../icons/mask-sad.svg?v=4876cae904a33e4fc0b5b5bff655edc2c70b86c06f6800c83738dee93ae0906e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
