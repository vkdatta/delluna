export const name="high_res";
export const id="dl_2e126d08df5d2d99b371";
export const url=new URL("../icons/high_res.svg?v=b6bcbf62166ed5007dcb8d7f08c6cceffffd6f9c01ad1945f8ecf6ba3b149513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
