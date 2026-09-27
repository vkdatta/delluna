export const name="lucid_2-cup-soda";
export const id="dl_94f606495a0c448e9430";
export const url=new URL("../icons/lucid_2-cup-soda.svg?v=f2a9301b786d56f4bd432c6f5625fe23392eb93a181f87055ac11797f70389c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
