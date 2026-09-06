export const name="high-heel-fill";
export const id="dl_0f994b5a9f044c498bc3";
export const url=new URL("../icons/high-heel-fill.svg?v=7a4b17b5fb574689c9eaf7b9456e48cbb0b9d9de147dc445b8627a7947f1139d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
