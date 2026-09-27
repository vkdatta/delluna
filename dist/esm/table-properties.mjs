export const name="table-properties";
export const id="dl_535c7ffad9ab499db478";
export const url=new URL("../icons/table-properties.svg?v=5c56a3b89da6d4b2e7604e98070e81856f27bf8c5b5b5ee93c9da59c117fb0bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
