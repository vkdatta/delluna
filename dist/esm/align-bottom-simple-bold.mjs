export const name="align-bottom-simple-bold";
export const id="dl_0b1b27018e254325b431";
export const url=new URL("../icons/align-bottom-simple-bold.svg?v=c5a7a4addf2a94dc3c69e8a4ad9dad60415712ee89c9dd50de1f0f01079143d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
