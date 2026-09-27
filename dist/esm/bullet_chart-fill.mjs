export const name="bullet_chart-fill";
export const id="dl_29d73c2a16dd40475b87";
export const url=new URL("../icons/bullet_chart-fill.svg?v=bae98cf58bbf2f806b32ae4522b966ae900cd20d6a8d7e7ba0b7fe42543fd94c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
