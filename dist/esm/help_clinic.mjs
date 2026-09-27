export const name="help_clinic";
export const id="dl_7fa5c06f8e9a17009a3c";
export const url=new URL("../icons/help_clinic.svg?v=99084be408251cb810359235be16b7735102478f9fbfb757c60248196a2bb861",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
