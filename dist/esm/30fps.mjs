export const name="30fps";
export const id="dl_af2f6f44ee8865076d7c";
export const url=new URL("../icons/30fps.svg?v=98d554ad7d91217bec67a68f21e4eeff2212c39ec63a9a7c7bcf1d677b41d1ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
