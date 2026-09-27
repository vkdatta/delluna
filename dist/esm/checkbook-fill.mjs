export const name="checkbook-fill";
export const id="dl_5180fbff7c5bc66affd8";
export const url=new URL("../icons/checkbook-fill.svg?v=cb000656180dadd29ba6e7fc54738334276f1c7098512123c7740a8a8b094e58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
