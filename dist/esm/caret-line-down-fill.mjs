export const name="caret-line-down-fill";
export const id="dl_5b8613dc9c924cde88d5";
export const url=new URL("../icons/caret-line-down-fill.svg?v=2f9fd032403190e2c846bfe579fdd8cf8d17dde645ce32be6f4224851c10ab74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
