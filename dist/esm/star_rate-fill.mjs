export const name="star_rate-fill";
export const id="dl_12df5a07a14e4f278bec";
export const url=new URL("../icons/star_rate-fill.svg?v=a9b3c9dad9dd723f5299a4a2aee7245ddbf59246f2c2c62be417aeb2e26d1dbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
