export const name="man-fill";
export const id="dl_d09f728352e72b055afe";
export const url=new URL("../icons/man-fill.svg?v=66ff8638e7ac377177a58622b92d292b4256db31d05307f0c65de1cb4867460d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
