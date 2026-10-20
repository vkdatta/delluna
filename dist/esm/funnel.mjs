export const name="funnel";
export const id="dl_8cae1a06dbc942418bb9";
export const url=new URL("../icons/funnel.svg?v=df8ae13ba5180cb178cbc5a733c93a807d9500cfc0a5b056ea31a1ca155090ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
