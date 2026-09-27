export const name="racquet-bold";
export const id="dl_e2598e36a5ee483c9053";
export const url=new URL("../icons/racquet-bold.svg?v=921e856363ea4b3bb3852039a500ac81a55d5879c86530a4b6717a8d2f04a011",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
