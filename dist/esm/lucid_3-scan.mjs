export const name="lucid_3-scan";
export const id="dl_a1bc98aaf115437d83cb";
export const url=new URL("../icons/lucid_3-scan.svg?v=bc55ee4c51b4cddd3b0dbe0a695006f646ebad4f91a7c922498d6ef72d628a3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
