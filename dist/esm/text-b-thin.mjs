export const name="text-b-thin";
export const id="dl_e5f501c4513e49ed0f0c";
export const url=new URL("../icons/text-b-thin.svg?v=f5fd6c07b3abd9879d7512bfd74a63e2c1dd9cdc96b68ee9feed732207c3f18f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
