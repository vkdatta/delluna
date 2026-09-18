export const name="4k_plus";
export const id="dl_8aa9b7205e5a471d9d76";
export const url=new URL("../icons/4k_plus.svg?v=39c2e4d4c5da3b77017609ac992e959c2aa9552e21de51c263767a135b36c707",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
