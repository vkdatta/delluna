export const name="vacuum";
export const id="dl_19a496fbf514d3b03c9b";
export const url=new URL("../icons/vacuum.svg?v=d9301f03b15f4383f3ba04b3c68284e7a95ac5563c8fcdbdcd2c21891aa0cfa6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
