export const name="arrow-up-bold";
export const id="dl_2e8ae96ddbef4341bf0e";
export const url=new URL("../icons/arrow-up-bold.svg?v=49f8c009f8e70d82906122842dbc95162b26ff1a22cd8260af11d92fd5527c63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
