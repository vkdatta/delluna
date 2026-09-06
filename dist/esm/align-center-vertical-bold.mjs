export const name="align-center-vertical-bold";
export const id="dl_7c1d0b9c238e416d921b";
export const url=new URL("../icons/align-center-vertical-bold.svg?v=40ff1c0c27f3669981c1ec764e4d6d48a2a6dfaa0c8122c4b2a20102248b52aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
