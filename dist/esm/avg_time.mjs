export const name="avg_time";
export const id="dl_46f414c23ca7f43fcd5e";
export const url=new URL("../icons/avg_time.svg?v=4b7e0fce5342bf5f886b726a41c11dc9a42b315e5face9075378eba90a6c9d17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
