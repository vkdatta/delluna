export const name="assignment_return-fill";
export const id="dl_386444703c1e2fc60ce7";
export const url=new URL("../icons/assignment_return-fill.svg?v=3239f5de912da6da16599d790b8898378e71540cda3bc22c0c808ef6f763d90b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
