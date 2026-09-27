export const name="electric_moped";
export const id="dl_2bf61a8e7ce88b6345ad";
export const url=new URL("../icons/electric_moped.svg?v=7634edb9d5ce4ce276fee2468d340879abac3f8140ad72f0d4fa6034891d59df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
