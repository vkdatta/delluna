export const name="clean_hands-fill";
export const id="dl_4fe08e49105774dc30a4";
export const url=new URL("../icons/clean_hands-fill.svg?v=60bc867aa7b82777a6a27f4cf1b3fdf626e4611e8dd72fb3809bea779955d136",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
