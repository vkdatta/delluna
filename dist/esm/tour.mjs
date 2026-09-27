export const name="tour";
export const id="dl_bf5e78d10c5092904d82";
export const url=new URL("../icons/tour.svg?v=85251a358b01f4ab7bdf0647ec2dae7496d789e3712db80b4ab4c5c8bc0d799e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
