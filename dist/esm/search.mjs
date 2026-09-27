export const name="search";
export const id="dl_ddd4bb51c362da338c39";
export const url=new URL("../icons/search.svg?v=4f99c6ebb3e4bf3ad65092067d429aa0ca2cd3b359f75ed90b2c21a3347eae3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
