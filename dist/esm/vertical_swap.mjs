export const name="vertical_swap";
export const id="dl_21d1d3f2eb79425f89de";
export const url=new URL("../icons/vertical_swap.svg?v=b16f4c78380146413d3ee577b0fd40c540f9347152c882585c728b4db41b8452",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
