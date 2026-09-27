export const name="ink_selection-fill";
export const id="dl_e603851ede36c5c612a8";
export const url=new URL("../icons/ink_selection-fill.svg?v=4d57b5ba47938fe332bcba2182db179795c8bd5b0b12ec550c8bd6ddb04d6193",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
