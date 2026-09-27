export const name="tibia";
export const id="dl_b1728f3e1f1c77e92b91";
export const url=new URL("../icons/tibia.svg?v=6a573681844f33a7f3df7478e0158524e150e86c87aab8c86ff73f70d1ec897b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
