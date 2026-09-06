export const name="credit-card-duotone";
export const id="dl_5b2292f0bde0403590ef";
export const url=new URL("../icons/credit-card-duotone.svg?v=27169bdb3b0d960c41a01e44ee1c7bf9c3b102ba1403e7c72cbae63be8e704f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
