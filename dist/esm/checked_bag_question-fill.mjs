export const name="checked_bag_question-fill";
export const id="dl_412cf66c21be4b7c87d0";
export const url=new URL("../icons/C/checked_bag_question-fill.svg?v=fcd8c39b5fc3ce79ab2553a465d3d657f1ea949c6efadd7f3fdf1695ea2770ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
