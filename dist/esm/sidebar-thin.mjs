export const name="sidebar-thin";
export const id="dl_684d1a912a786feae5e4";
export const url=new URL("../icons/sidebar-thin.svg?v=8a6a575be446d9874ffc04c5338e85c2a3f7db1d6c8d487c8a30f89dd179760b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
