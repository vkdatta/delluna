export const name="linktree-logo";
export const id="dl_06ff3d16238440bfabdd";
export const url=new URL("../icons/linktree-logo.svg?v=79ec913a68979765985d0e076f73d365dcccb9c0b07900e48d4e9b80ecf5c15c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
