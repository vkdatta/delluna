export const name="transportation";
export const id="dl_b3465a55a3612c6c9a14";
export const url=new URL("../icons/transportation.svg?v=587b255252b96d6c794177b5ac9216565b6a2e0e7bbb9e6ea229c00faa1cdeae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
