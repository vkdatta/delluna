export const name="lucid_2-eject";
export const id="dl_44026a552c034924a409";
export const url=new URL("../icons/lucid_2-eject.svg?v=c87d40356d3e26194e7aaa7bfac54e1bdc060ae828223583c9597cdd677b32fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
