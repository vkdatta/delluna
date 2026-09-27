export const name="lucid_1-cigarette-off";
export const id="dl_af4f91d931c54c279ec8";
export const url=new URL("../icons/lucid_1-cigarette-off.svg?v=d31dec662a52aa8490050735b41c3fa5fad8a63e91197217e164d249ec4aefcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
