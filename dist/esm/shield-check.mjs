export const name="shield-check";
export const id="dl_6d16b5b97b9747acbc70";
export const url=new URL("../icons/S/shield-check.svg?v=bb04d552c0baaaabd90f7eb60760cb0c7ddb7e9f47e4b76e9599ddd7dfd8eaa7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
