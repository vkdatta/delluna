export const name="lucid_3-soup";
export const id="dl_d436fd63b23a4f62a3b7";
export const url=new URL("../icons/lucid_3-soup.svg?v=d34e25e5e52b1c58ee9622822130e48fc61f3ee8326cf176eb4ceb125c35fa97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
