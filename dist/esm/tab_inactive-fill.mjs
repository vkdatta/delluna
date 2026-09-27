export const name="tab_inactive-fill";
export const id="dl_0879e4ffc0e4f8289b8b";
export const url=new URL("../icons/tab_inactive-fill.svg?v=7cd68703ab3ca24ead1e6ed35c6aa885cc67b6f0c66ca9d67f745a93e0e48211",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
