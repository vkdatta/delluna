export const name="number-square-seven-duotone";
export const id="dl_e34acca79e9e4b81aac4";
export const url=new URL("../icons/number-square-seven-duotone.svg?v=1aa6d7ccbd40eb0cd945a4f9e4a94247b057c84eb315c7e9812312057c912d8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
