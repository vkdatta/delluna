export const name="procedure-fill";
export const id="dl_48571c97c7abb2250fbf";
export const url=new URL("../icons/procedure-fill.svg?v=af04ef02fb45f3b084ad0679eb8cd5d9a8a66fa1880f319ba7aaa094a9f0ab5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
