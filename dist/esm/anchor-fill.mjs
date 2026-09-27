export const name="anchor-fill";
export const id="dl_647395575a41446d8154";
export const url=new URL("../icons/anchor-fill.svg?v=2b7def247b63f7e5e5fe85aa628d1cbe65dac0dbd9ad43e4451a12ce7bd35f34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
