export const name="ping-pong-light";
export const id="dl_5532f90e47dc486bad2b";
export const url=new URL("../icons/ping-pong-light.svg?v=810215489a338b77fa2ed47637a7268659c1d2700c685ea0842ae408ecfbe6e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
