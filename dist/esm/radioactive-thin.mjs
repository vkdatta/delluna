export const name="radioactive-thin";
export const id="dl_39c2ad53ca5b433ebd5b";
export const url=new URL("../icons/radioactive-thin.svg?v=17d075cf0eaaee9e16a978dd7ced390fa4c16f1f384842320446ec44dd69ea44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
