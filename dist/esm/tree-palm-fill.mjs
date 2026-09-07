export const name="tree-palm-fill";
export const id="dl_be01484d37754628a5c6";
export const url=new URL("../icons/T/tree-palm-fill.svg?v=cbd50cf565bb4d6741364bfe1f71b5ae7799daf970777ba69c144df3f5707212",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
