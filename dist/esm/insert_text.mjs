export const name="insert_text";
export const id="dl_9457aef68c3d537fb6ae";
export const url=new URL("../icons/insert_text.svg?v=f76805a23896f9907b700d2ed6ef4a11279bc24bac456b2a1c9aa8ef416a6bce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
