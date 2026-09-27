export const name="network-x-bold";
export const id="dl_ed7403358a2047408ee2";
export const url=new URL("../icons/network-x-bold.svg?v=361d26877abbea48e67dc1ec7340e1b0c931f8c3d7e2fab0011ce36b8d0475fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
