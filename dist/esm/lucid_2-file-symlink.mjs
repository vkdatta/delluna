export const name="lucid_2-file-symlink";
export const id="dl_5960ed121fe44a2384a1";
export const url=new URL("../icons/lucid_2-file-symlink.svg?v=a558fec1458cfd9068ff8c7b504542e5f0c1634782d442e2373a2464351d2396",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
