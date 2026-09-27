export const name="number-square-two-duotone";
export const id="dl_ff37d91401584ef0a270";
export const url=new URL("../icons/number-square-two-duotone.svg?v=2b3d20ecd4d61a276b50b1af5b893e3d245ddd434a09ca2e82e3e5f5ede1abed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
