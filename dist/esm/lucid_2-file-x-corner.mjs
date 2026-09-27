export const name="lucid_2-file-x-corner";
export const id="dl_a22e18aa8ab1434292d0";
export const url=new URL("../icons/lucid_2-file-x-corner.svg?v=9943dad21103f6c7e07f2003de07a1fddb9a9f9aaa90b5ffa9c4d10e5c58d863",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
