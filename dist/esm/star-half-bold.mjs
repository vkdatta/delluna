export const name="star-half-bold";
export const id="dl_bb65ef22c1d5bcd57c45";
export const url=new URL("../icons/star-half-bold.svg?v=19c5cec1c6d793258d8ad174f71a0f9e1bde35f03c9a4bad16b96f5b06b462dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
