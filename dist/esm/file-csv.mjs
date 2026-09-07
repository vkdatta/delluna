export const name="file-csv";
export const id="dl_641cce62160c413d920a";
export const url=new URL("../icons/file-csv.svg?v=91b9e9f687a6ddd8b7bb56b9f03d0e29d6b44654dfe8376f9d6f30e2aa003f5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
