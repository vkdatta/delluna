export const name="lucid_1-book-lock";
export const id="dl_1c67058694f84848a9e9";
export const url=new URL("../icons/lucid_1-book-lock.svg?v=57f5bc62b39e8d8925342076226e85871e6e10e1e1250801aad8d9012d7148ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
