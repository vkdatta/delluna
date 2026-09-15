export const name="distance-fill";
export const id="dl_61add6f2aebc4a37b348";
export const url=new URL("../icons/D/distance-fill.svg?v=80956f47b12c9ab5bf5119c7030c1c08284ed2efd3324a1df18b75624d7d9fd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
