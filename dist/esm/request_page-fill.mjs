export const name="request_page-fill";
export const id="dl_1a6f792c090e0a7a2c53";
export const url=new URL("../icons/request_page-fill.svg?v=45fcad6586d62b773418290fe837d5ce8ecc6a3df9212baf0c7707c2502d9092",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
