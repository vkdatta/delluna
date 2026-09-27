export const name="cards-three-thin";
export const id="dl_92275f99e9ba40ce8aaa";
export const url=new URL("../icons/cards-three-thin.svg?v=c232dc8e1ee6bbea8c3bc017d3b7a759e7e46837127b1c8da0dba4d6c5fff08b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
