export const name="file-ini-thin";
export const id="dl_fd66f614afb644e2ba56";
export const url=new URL("../icons/file-ini-thin.svg?v=7ffbf116cb9587d44cb907f304887a2c71d622f01b717f850eca7a4d3033b8d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
