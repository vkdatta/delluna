export const name="prescriptions-fill";
export const id="dl_0d2223723c9f44214a69";
export const url=new URL("../icons/prescriptions-fill.svg?v=9c8fc3247c2286f2a288dbf7a2f9e83c334ace778bc0bf608bf19239d8ee1224",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
