export const name="deskphone-fill";
export const id="dl_443a0ff2e828d3a8af36";
export const url=new URL("../icons/deskphone-fill.svg?v=82b35b6d8eb4b22f1f1bccddac5e11c552ea798640f0fcc102bb6394d6b31d2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
