export const name="arrow-fat-up-duotone";
export const id="dl_7a8d3aea476a4ad2a973";
export const url=new URL("../icons/arrow-fat-up-duotone.svg?v=77460a3b3aed537ffbcd4180aefe30f7235e91564f6f2b24c0f19a33b6704faf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
