export const name="arrow_circle_up";
export const id="dl_0144051ce2bd352d3a25";
export const url=new URL("../icons/arrow_circle_up.svg?v=aa710a0f47d852a18bc953e6b2e07fefd4277eedd257de6dabee78e3db259743",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
