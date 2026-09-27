export const name="battery-vertical-low-light";
export const id="dl_4ac57fa6a3b947f2956a";
export const url=new URL("../icons/battery-vertical-low-light.svg?v=e85bf2bafcbae00f4a0fb1aebdb80108c2a35feb33366d6419a62cde44814a66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
