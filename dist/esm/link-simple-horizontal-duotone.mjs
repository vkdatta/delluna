export const name="link-simple-horizontal-duotone";
export const id="dl_679ab837c7004f1bb077";
export const url=new URL("../icons/link-simple-horizontal-duotone.svg?v=b1d011c182a2ca0494f1cb40b29866f3aee91f61433fda4a73a8ce924e3e690d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
