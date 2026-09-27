export const name="book-open-text-light";
export const id="dl_97c49c0d1ad140d080c6";
export const url=new URL("../icons/book-open-text-light.svg?v=496ce3a43cbc604994b95c9aac206b62c351631d61ba9112fb712e6c5805bd0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
