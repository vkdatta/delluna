export const name="lucid_1-badge-euro";
export const id="dl_c3fd940a1e25429eada7";
export const url=new URL("../icons/lucid_1-badge-euro.svg?v=39356d3541ba7e4b1c9abba704bde04433fae8fa4faeebcbcfb9806acb1b30f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
