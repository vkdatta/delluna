export const name="arrow-fat-right-light";
export const id="dl_7157aa55d36949058445";
export const url=new URL("../icons/arrow-fat-right-light.svg?v=15ae6263345f802161fb7120cc9895b2cd5a08ba59a7a18ea70ed82a2608ae44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
