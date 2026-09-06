export const name="utensils-crossed";
export const id="dl_47c46a9a65504c069a8e";
export const url=new URL("../icons/utensils-crossed.svg?v=0e157fbfb208b61b4ec2e5e34b31121575898b4ab5c924f228a1c49db66c17a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
