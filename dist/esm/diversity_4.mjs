export const name="diversity_4";
export const id="dl_86162384d328407c97f5";
export const url=new URL("../icons/diversity_4.svg?v=d8c8b5df8d9b555ef5b2347911d4a12b6b983c8d9d5891a98cf04830ad463272",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
