export const name="text-subscript-fill";
export const id="dl_86265ee84977b0e21818";
export const url=new URL("../icons/text-subscript-fill.svg?v=9b06bf80ce2a2720d259922117da78ac19aaa8da555859ce3e48f84362dcd590",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
