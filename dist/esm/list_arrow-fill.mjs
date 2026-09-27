export const name="list_arrow-fill";
export const id="dl_c31d8bb4cf489ccfae8b";
export const url=new URL("../icons/list_arrow-fill.svg?v=d60d4969ff096bc959c4b7bb80c2db24b2b1112a6d7ae2b8d52abd9a1dc76201",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
