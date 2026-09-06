export const name="cigarette-bold";
export const id="dl_0951ecd053874f4fbd5b";
export const url=new URL("../icons/cigarette-bold.svg?v=1ead26aebcbebe0b6413a6bbc2be2ea8c1b1edfab5e55b726da988d5309061b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
