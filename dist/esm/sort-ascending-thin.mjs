export const name="sort-ascending-thin";
export const id="dl_419a5b699c2e4979913e";
export const url=new URL("../icons/S/sort-ascending-thin.svg?v=ae63df66e8f18393b8f8e1ee96047888451ee9afeeff3df951b850e8dfaff070",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
