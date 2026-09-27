export const name="variable";
export const id="dl_e2eb6a5caf104450b65d";
export const url=new URL("../icons/variable.svg?v=18b70caa27492acd7dd050b63d9bcd6ec69eec22193258f1b15cf67858ec8ede",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
