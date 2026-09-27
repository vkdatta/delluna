export const name="coat-hanger-fill";
export const id="dl_c751c4d6b5304d96a7a8";
export const url=new URL("../icons/coat-hanger-fill.svg?v=d55df95d19a626fd4918412cf0833e682436a7ade5640fa35172e4481b29d45d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
