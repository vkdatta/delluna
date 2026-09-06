export const name="messenger-logo-bold";
export const id="dl_c22ec784c35043e5a371";
export const url=new URL("../icons/messenger-logo-bold.svg?v=e69680fefcce7d2b5e6b62392c62465e2cc1d1a4ee769abe254fe9bb426b0f90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
