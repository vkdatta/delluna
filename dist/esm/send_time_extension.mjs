export const name="send_time_extension";
export const id="dl_c94c4416f842e93f4aa2";
export const url=new URL("../icons/send_time_extension.svg?v=298a84538f94346f4f37876618e4761361910867dd8aa8918acbe5a49234e7c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
