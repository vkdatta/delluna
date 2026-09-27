export const name="detection_and_zone-fill";
export const id="dl_cb2b9eb4782c1e1ea9f2";
export const url=new URL("../icons/detection_and_zone-fill.svg?v=ef98a1441bfc63f8c4a0458e1a6e28aefec9702e86ebe6f352f4cc14dabe94d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
