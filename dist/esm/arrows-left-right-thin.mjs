export const name="arrows-left-right-thin";
export const id="dl_65ce1e20c6d44018bf7f";
export const url=new URL("../icons/arrows-left-right-thin.svg?v=a990d4c827ef80a7a9bbd2b6cd61005f43270b9fa17c5fa50026575482829da9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
