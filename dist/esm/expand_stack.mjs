export const name="expand_stack";
export const id="dl_59244e88de7f48db809b";
export const url=new URL("../icons/all_60_named_svgs/expand_stack.svg?v=043fb6236954d57b972fc0023f564f32c44c55f152f2bf3ac5b3adf2f9517dad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
