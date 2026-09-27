export const name="indeterminate_check_box-fill";
export const id="dl_f94246507f9181ead6e2";
export const url=new URL("../icons/indeterminate_check_box-fill.svg?v=b5074d462da505245d8919c4f7233a26539aa8b5fb348f17dd3c03036229d64c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
