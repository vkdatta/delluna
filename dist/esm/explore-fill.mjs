export const name="explore-fill";
export const id="dl_2a6a3c08d6fd4ed1bdff";
export const url=new URL("../icons/explore-fill.svg?v=5d18184fe5f9b9e8c93bc92d44d0d0ff28ee053531e576c4e7e5c7a30cab6e70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
