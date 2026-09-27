export const name="visibility-fill";
export const id="dl_04035233b2957260f080";
export const url=new URL("../icons/visibility-fill.svg?v=02f6d0ba2c411b001cd31d12e857b6cf62a3224cad920011c01e5be2e051048c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
