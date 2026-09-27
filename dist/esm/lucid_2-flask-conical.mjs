export const name="lucid_2-flask-conical";
export const id="dl_8b57c461f12a46888d7d";
export const url=new URL("../icons/lucid_2-flask-conical.svg?v=87fb14fcc4f0a23e349bd1d1c03915b3eb52a9ef9f1fab99847a2b5479f252af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
