export const name="lucid_3-message-circle-warning";
export const id="dl_cf0fd172ff1d47e6a76b";
export const url=new URL("../icons/lucid_3-message-circle-warning.svg?v=8e8e8d4c7c976ab4042fb530d73ddaeb51dc1882a170017b14c7e419b9e50efd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
