export const name="number-circle-seven-duotone";
export const id="dl_613193f176e8462586b5";
export const url=new URL("../icons/number-circle-seven-duotone.svg?v=e249558d37703341289c5d0f65dbe7913c9f0e6f071a248bd218896165b8700a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
