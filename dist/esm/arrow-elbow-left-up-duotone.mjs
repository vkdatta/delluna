export const name="arrow-elbow-left-up-duotone";
export const id="dl_b9f9e9fc11634a8692cb";
export const url=new URL("../icons/arrow-elbow-left-up-duotone.svg?v=aa9a46045199f5ee85239948593befe9d13c153c39e2872934ac91211989e98e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
