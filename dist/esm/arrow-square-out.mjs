export const name="arrow-square-out";
export const id="dl_4ea9ba8b9e534e70a1b1";
export const url=new URL("../icons/arrow-square-out.svg?v=4c56bcece7b350c84aadc8ff41c6959e11f4ac8f61e42b9eaf2491c83acf5b77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
