export const name="filter_vintage-fill";
export const id="dl_58975190687c46c1c2a8";
export const url=new URL("../icons/filter_vintage-fill.svg?v=bba2cbc494a90f97d57c3134b2a9228528f1e3315010272279ca33127abb7abb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
