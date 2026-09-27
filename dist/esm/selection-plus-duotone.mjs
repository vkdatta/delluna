export const name="selection-plus-duotone";
export const id="dl_76c359252094e996c413";
export const url=new URL("../icons/selection-plus-duotone.svg?v=5e99523c480f339230d100baeb470a4fa54e4382ffdc1958b6e7a095102f768b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
