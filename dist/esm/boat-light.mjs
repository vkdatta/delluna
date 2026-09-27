export const name="boat-light";
export const id="dl_f00e9f46c05a48faa297";
export const url=new URL("../icons/boat-light.svg?v=8d22d9910579bd3063c43536153e2f8fd4b440e12a402e71235693f65fbf0afb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
