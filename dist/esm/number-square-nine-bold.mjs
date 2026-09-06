export const name="number-square-nine-bold";
export const id="dl_b8cf4348bc954e4ba637";
export const url=new URL("../icons/number-square-nine-bold.svg?v=70a9d514e5a53ef27ef5384883a57a1da9c7e933ee38d51fcb0d694e50bc6628",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
