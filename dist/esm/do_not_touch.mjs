export const name="do_not_touch";
export const id="dl_7c3422f7d611092d52b2";
export const url=new URL("../icons/do_not_touch.svg?v=657d2ca69b5564a20c65366f8c20a0c007d4394ed459f598ca729553014697ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
