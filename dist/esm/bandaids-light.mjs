export const name="bandaids-light";
export const id="dl_9351000f705f42a5aeea";
export const url=new URL("../icons/bandaids-light.svg?v=40aa578af71b1845e3b5d3cb44999a7ecf6219ec1dcf37926d73ca23d65b2bf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
