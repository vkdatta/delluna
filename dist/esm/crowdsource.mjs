export const name="crowdsource";
export const id="dl_b37d1235e23e42659f58";
export const url=new URL("../icons/crowdsource.svg?v=8957d3a5b1c16afa962fd19ad0a38637f33022d2ef94ccd82f074e4c6eb1f80d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
