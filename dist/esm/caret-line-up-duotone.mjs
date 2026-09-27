export const name="caret-line-up-duotone";
export const id="dl_f6d2ac1eeff14171b733";
export const url=new URL("../icons/caret-line-up-duotone.svg?v=5116f21f1543f8d42d55033056f0a6d27c439e4e71967152a92229cb609fc0ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
