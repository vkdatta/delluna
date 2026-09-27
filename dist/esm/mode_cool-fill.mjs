export const name="mode_cool-fill";
export const id="dl_5dcc69a8be7acb7338d2";
export const url=new URL("../icons/mode_cool-fill.svg?v=cc90ad5b6e63d49c6b56cd0afdc00c5d9923a685ae6dea0cb51c65cfadc49478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
