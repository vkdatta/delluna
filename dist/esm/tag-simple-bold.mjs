export const name="tag-simple-bold";
export const id="dl_e81b12ece7d76c290868";
export const url=new URL("../icons/tag-simple-bold.svg?v=5741e0a31426decbdca2e08befe4f9bf6677c484efaa0a889c208a8356730381",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
