export const name="brackets-square";
export const id="dl_28567992456742a3bccc";
export const url=new URL("../icons/brackets-square.svg?v=4d09167d949ac463f5188bf8e3de41d28838c0e6f0eeeb38b394c6dbe467fc2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
