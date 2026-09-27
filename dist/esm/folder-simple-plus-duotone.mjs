export const name="folder-simple-plus-duotone";
export const id="dl_ce9ac2779bea46a48e71";
export const url=new URL("../icons/folder-simple-plus-duotone.svg?v=e67d989438d1e695e980039cbba389bdaf6d39ea7de17fb45b4baa4fdbb61649",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
