export const name="playground_2";
export const id="dl_c0e4b81cf6f4b329d3a9";
export const url=new URL("../icons/playground_2.svg?v=4927c37abbe4d0b5c59d0521cc1c33a1faae632018c5cb105b72ab3ca4650a46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
