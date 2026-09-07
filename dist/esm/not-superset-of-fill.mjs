export const name="not-superset-of-fill";
export const id="dl_a43e880f714f4b138b9c";
export const url=new URL("../icons/not-superset-of-fill.svg?v=9efadba7416aad13e29f5aede68ef3aaab6d94d809f2f094e01b7f18d54cbd95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
