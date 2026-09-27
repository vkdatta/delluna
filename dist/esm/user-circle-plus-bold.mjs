export const name="user-circle-plus-bold";
export const id="dl_6413dd54a88ff09ddce6";
export const url=new URL("../icons/user-circle-plus-bold.svg?v=84a3479307d7319769c2fd9ff866d793303322068c5644564b31d209ca3488a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
