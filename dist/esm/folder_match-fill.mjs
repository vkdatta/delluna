export const name="folder_match-fill";
export const id="dl_de3033da31e04048ad13";
export const url=new URL("../icons/folder_match-fill.svg?v=af64b70574e62b3978a7646a82864cd55eb14c509c2b09ffeb25aaabab457c0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
