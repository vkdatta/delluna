export const name="confetti-thin";
export const id="dl_254cde10b161439692ba";
export const url=new URL("../icons/confetti-thin.svg?v=8c051a5c64d9ac788ba3ef43ecf45cfc395407bcc822c8c7cd346ef6136fbd94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
