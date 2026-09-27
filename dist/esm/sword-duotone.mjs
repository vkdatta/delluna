export const name="sword-duotone";
export const id="dl_79328deabcdb9a68ded3";
export const url=new URL("../icons/sword-duotone.svg?v=0c6f7e6b9f88cde1244b112285e084cd3c6831b39e2142ee126da4ea1d172aa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
