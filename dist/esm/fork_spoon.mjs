export const name="fork_spoon";
export const id="dl_3eb318d282fb47d17ece";
export const url=new URL("../icons/fork_spoon.svg?v=e0236c9c78c61126da08a567f7fb4fc274c68463dce00b8dc5078e7bb95f339d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
