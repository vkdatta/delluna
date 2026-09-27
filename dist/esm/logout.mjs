export const name="logout";
export const id="dl_dafbbc02e84e6cb746a5";
export const url=new URL("../icons/logout.svg?v=d17f3cbe46af37c1983b08f6e0473156bcd41228d318255d13e481257aabf028",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
