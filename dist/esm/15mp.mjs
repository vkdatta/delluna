export const name="15mp";
export const id="dl_390d4efe5593f79b86c2";
export const url=new URL("../icons/15mp.svg?v=606c275468ee4e00038a35434524b43a2469bf47eae5ab24d2fd6ce4e1733c0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
