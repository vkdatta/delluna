export const name="person_search";
export const id="dl_0b0779b4297243ce5978";
export const url=new URL("../icons/person_search.svg?v=96c3cd8bbb26e194967c1cf6f9fdc1d0fb7122c033e2ef399eace88ceb1e4ad3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
