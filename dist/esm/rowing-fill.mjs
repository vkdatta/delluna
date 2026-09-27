export const name="rowing-fill";
export const id="dl_238dd07f428662fa54c4";
export const url=new URL("../icons/rowing-fill.svg?v=078917908b3fcff8c78456f74f144ec53c87012da0cd2dd2ebf829e233ae3218",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
