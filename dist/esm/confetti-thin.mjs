export const name="confetti-thin";
export const id="dl_254cde10b161439692ba";
export const url=new URL("../icons/confetti-thin.svg?v=d4d1404ac1745f9d1a3c389beff8fcdf6d8939def61b965194cec6aac8209450",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
