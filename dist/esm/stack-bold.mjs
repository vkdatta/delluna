export const name="stack-bold";
export const id="dl_5fd11a6efff6d4c4538c";
export const url=new URL("../icons/stack-bold.svg?v=6222d0c00d45e2b2dace0db1300b5253059227d7b50874a43e9c406c3f6a72f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
