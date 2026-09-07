export const name="toggle-right-fill";
export const id="dl_a8ade305bbcd4e9ca422";
export const url=new URL("../icons/T/toggle-right-fill.svg?v=470804a709f3f25922ed8083476ef1d6ef749e50e52b5e42cc0cd5cf12944710",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
