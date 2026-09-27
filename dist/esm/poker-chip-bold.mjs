export const name="poker-chip-bold";
export const id="dl_d7fb710acd0d4c79b5ff";
export const url=new URL("../icons/poker-chip-bold.svg?v=5ac20b75e5c3d0fd644b1c5774d29cc5f2a1f29c0ee88955616cb6e561da45e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
