export const name="union";
export const id="dl_08a9c5c311d44047b5c2";
export const url=new URL("../icons/U/union.svg?v=4af57a4129c0785d770da953c00fa284901cbd54b62027c6e72fd6f4806d765a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
