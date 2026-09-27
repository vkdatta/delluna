export const name="lucid_3-refrigerator";
export const id="dl_87e4a63bb4a6401dbe08";
export const url=new URL("../icons/lucid_3-refrigerator.svg?v=bd38b9d48fd84033198b7de36147b93a35063e34aaf14b447e7ae8129be22426",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
