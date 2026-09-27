export const name="send_and_archive-fill";
export const id="dl_c56cea32102a147aaadf";
export const url=new URL("../icons/send_and_archive-fill.svg?v=f282cb34c1fdd7e2ea23a1348fc1ccd57529cdf37dce5f38fb7e29fb24308351",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
