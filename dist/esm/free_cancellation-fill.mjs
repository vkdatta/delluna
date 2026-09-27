export const name="free_cancellation-fill";
export const id="dl_c5504f454b1934b814a6";
export const url=new URL("../icons/free_cancellation-fill.svg?v=41040482a4a8346648c7b028cca3323527bcee91cd2ea88e3c7bd04e8c35a970",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
