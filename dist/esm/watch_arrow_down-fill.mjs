export const name="watch_arrow_down-fill";
export const id="dl_7ae069906aae01173eb2";
export const url=new URL("../icons/watch_arrow_down-fill.svg?v=be028840b7e71903732c39da542c248109321c81e88a37a0ef7798082ceb06fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
