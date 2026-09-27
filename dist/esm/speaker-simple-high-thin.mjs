export const name="speaker-simple-high-thin";
export const id="dl_cd3ea68b0e8457a4d51b";
export const url=new URL("../icons/speaker-simple-high-thin.svg?v=942537531fbe46197452580333afe4f003aa15be7627f51a917ca9f22a0ea708",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
