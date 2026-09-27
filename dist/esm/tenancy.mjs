export const name="tenancy";
export const id="dl_fd88ac684f96f5d8363e";
export const url=new URL("../icons/tenancy.svg?v=77589ada4ae1a05822dd0d869db2ff869ce03e83e917b56d7de622c853cbf035",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
