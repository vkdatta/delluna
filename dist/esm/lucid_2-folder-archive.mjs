export const name="lucid_2-folder-archive";
export const id="dl_9bc99d87b9b94b76ac94";
export const url=new URL("../icons/lucid_2-folder-archive.svg?v=5c4a11000ff18d91c4c9ff3a4092a42ca66d668670f13c125497eccf05c1d700",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
