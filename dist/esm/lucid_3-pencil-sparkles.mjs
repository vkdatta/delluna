export const name="lucid_3-pencil-sparkles";
export const id="dl_5e609697054c4f2b857b";
export const url=new URL("../icons/lucid_3-pencil-sparkles.svg?v=a6815b1a679dcf2ec08a4d801984825ee5650119344aab54f2f59b54dcd486ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
