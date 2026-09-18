export const name="view_module";
export const id="dl_069f3d52b03d43f39dd2";
export const url=new URL("../icons/V/view_module.svg?v=b5a49d1f9814b36c9c083707d692717af78c4e4b92b3b3c0697da51dd956b4b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
