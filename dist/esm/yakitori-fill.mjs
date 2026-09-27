export const name="yakitori-fill";
export const id="dl_cd82dce483223fcc8eae";
export const url=new URL("../icons/yakitori-fill.svg?v=52e955aeb6cf706e7aece6e976f07b55bc8e20f3e36cc1e4ff73c573660e69c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
