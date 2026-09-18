export const name="power_off-fill";
export const id="dl_e686cf7214b043d78ca8";
export const url=new URL("../icons/power_off-fill.svg?v=1532ebd2264020531b024955b64f98bdd391a4c9c76f3e98fadb9aaa6e2afd19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
