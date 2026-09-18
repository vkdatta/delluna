export const name="transportation";
export const id="dl_767facce1d9c4ca2adbc";
export const url=new URL("../icons/transportation.svg?v=cf1801049bc3680d2d60ade44f0aae53f6cf683ee5b2213a0c7bc5b60afa7cbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
