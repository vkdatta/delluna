export const name="sweep-fill";
export const id="dl_0c3a0baf487c42a79569";
export const url=new URL("../icons/sweep-fill.svg?v=13506cc31b708314d785cbc8d5a2e4514d9681db6e7e82aa63016d762ca94339",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
