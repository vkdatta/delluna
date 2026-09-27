export const name="texture_minus-fill";
export const id="dl_fd664ab71b718b3644e8";
export const url=new URL("../icons/texture_minus-fill.svg?v=a117f80cc3abe38cb906c078b6470ee7ca352725e908da09b389529f5aaea05d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
