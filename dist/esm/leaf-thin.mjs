export const name="leaf-thin";
export const id="dl_c47abca6229b485f8f0f";
export const url=new URL("../icons/leaf-thin.svg?v=e6e4dd7b8afc478bc472bcf6866fc90092b509d3cc96eae759b07588acbde06a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
