export const name="sidebar-simple-bold";
export const id="dl_9ee0565a419ae2745908";
export const url=new URL("../icons/sidebar-simple-bold.svg?v=2a118cea99923abd401c3b62a0419bdccfe1b21df727edbf42beb68889b120ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
