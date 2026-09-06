export const name="lucid_3-sparkles";
export const id="dl_abc618183c8f4215b097";
export const url=new URL("../icons/lucid_3-sparkles.svg?v=4ee48916597cf50d89120d308f7647bad7af3c152e96f7e11ca6cf58251e750b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
