export const name="add_moderator";
export const id="dl_5941485cfe34ffe21f03";
export const url=new URL("../icons/add_moderator.svg?v=fa88720671334681e8e6acb866c27ce08ba1cea3ecdacaaa084a7120ea3f0a47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
