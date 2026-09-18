export const name="phone_forwarded-fill";
export const id="dl_6d3195063bdd44549c83";
export const url=new URL("../icons/P/phone_forwarded-fill.svg?v=fba08d214b283bbf7fb0ed3ddbbbdf2651280a053b028c87fa8e50ca70795138",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
