export const name="exercise-fill";
export const id="dl_582fb515548b4092be88";
export const url=new URL("../icons/exercise-fill.svg?v=b56133a42b79a642febe9262259d6ec4d97c083a826389e52a9c5f54bf23c63b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
