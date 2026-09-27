export const name="stack_group";
export const id="dl_45a799de709aa800c37a";
export const url=new URL("../icons/stack_group.svg?v=dd6dad53ebe12f44addd555ca332254b5653221d410b5d34cf11829f7f592d22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
