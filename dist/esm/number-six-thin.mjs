export const name="number-six-thin";
export const id="dl_8c093ea27258478fa2cc";
export const url=new URL("../icons/number-six-thin.svg?v=c9feb32978fe54a12ab3314f8b1a392d84315378320f086268ecdd760d036194",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
