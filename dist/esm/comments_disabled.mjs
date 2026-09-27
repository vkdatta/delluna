export const name="comments_disabled";
export const id="dl_ea139c3aac63aea10bea";
export const url=new URL("../icons/comments_disabled.svg?v=023bd7f3e22ed9d3c2acdff31fcc7f42c91213542bad382a8f49387101a422a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
