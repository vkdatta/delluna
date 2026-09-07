export const name="garage-bold";
export const id="dl_4e6f18adadbd4470931f";
export const url=new URL("../icons/garage-bold.svg?v=c5c4c828c7ca1a730405c08bc927b4a806b559507e59d81c4fb01319a3635beb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
