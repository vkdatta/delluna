export const name="workspaces";
export const id="dl_717d54b07b380804bd23";
export const url=new URL("../icons/workspaces.svg?v=e2fcfed75c93bfe56dfa0ec839e178f1d0bfb5e71277b1a91bc4eb00103b88f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
