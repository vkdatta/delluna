export const name="lastfm-logo";
export const id="dl_ce99faf114b94aa0a802";
export const url=new URL("../icons/lastfm-logo.svg?v=e11314ca949e73be172b3db5e45aa19b5ffce43c7b97ed285dfb68c152d65fcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
