export const name="play_disabled";
export const id="dl_fcb648e82b61f14a9937";
export const url=new URL("../icons/play_disabled.svg?v=c72751737b09ea036a3ceea1ac1d3901222774d38121a3474b93848d2f6be79c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
