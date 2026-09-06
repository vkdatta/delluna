export const name="tick";
export const id="dl_57f503dee03c4a4aac79";
export const url=new URL("../icons/tick.svg?v=074ae77022da4d51720b0a8d6ef57453a705edc7bc7132c65f1e6eaa5f4423e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
