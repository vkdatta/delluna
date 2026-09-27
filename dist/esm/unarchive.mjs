export const name="unarchive";
export const id="dl_e33f91a33c1cf20ede2a";
export const url=new URL("../icons/unarchive.svg?v=da2cc8126ca4b4a21a4024de952fc30fe74590678fc42bb7f4e076a94ed0a0d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
