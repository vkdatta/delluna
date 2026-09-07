export const name="move_vertical_center";
export const id="dl_efbec1e1fb9a4978b357";
export const url=new URL("../icons/all_60_named_svgs/move_vertical_center.svg?v=cac344686a33254a19eb9a7ae3665cae2fdcd974b6be366b422a4f40909f72a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
