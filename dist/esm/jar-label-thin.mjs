export const name="jar-label-thin";
export const id="dl_7254f3bb36f8475ba35e";
export const url=new URL("../icons/jar-label-thin.svg?v=730d47f4f6293e517b8396bfc8e099550d66255e3f4fedbb8ea781c71c9d96a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
