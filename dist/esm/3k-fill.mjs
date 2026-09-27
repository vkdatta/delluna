export const name="3k-fill";
export const id="dl_7c7fc64b2c9aed5256b6";
export const url=new URL("../icons/3k-fill.svg?v=df652b31e3d3718486952bbf5a95b5155c0a6a90c049fb92d60edad6a38e3376",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
