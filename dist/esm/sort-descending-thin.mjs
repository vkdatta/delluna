export const name="sort-descending-thin";
export const id="dl_039e7b577faf4a41c026";
export const url=new URL("../icons/sort-descending-thin.svg?v=d0475b7b4909ba1a0adc4f89c2c2ba40a21f4e62f9a6eb4c7a56de675581684a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
