export const name="lock-key-open";
export const id="dl_e100f827f4b94eb6971c";
export const url=new URL("../icons/lock-key-open.svg?v=8cc4da16426d66b0e8cc4af069cdb56d25fb5cf86a092fdda3895450551a8737",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
