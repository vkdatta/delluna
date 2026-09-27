export const name="user-round-plus";
export const id="dl_97c231521be44b3d80b9";
export const url=new URL("../icons/user-round-plus.svg?v=0e06f2b68bf2d86c9855d823b32eae582ef82fdd7626508c9ca590f39f459581",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
