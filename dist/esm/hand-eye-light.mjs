export const name="hand-eye-light";
export const id="dl_8a7e365a6d984d7dab7b";
export const url=new URL("../icons/hand-eye-light.svg?v=31b459c8e88a84a0db3d62861674311266cdebabe3863c5f545747e797b62359",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
