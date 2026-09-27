export const name="cheer-fill";
export const id="dl_c78061143937d71c346b";
export const url=new URL("../icons/cheer-fill.svg?v=a9460aabcb9d2fe3905923b5006aa10985a4026c17ce8b718ba432eb977ddd0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
