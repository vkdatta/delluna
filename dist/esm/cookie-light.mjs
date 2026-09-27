export const name="cookie-light";
export const id="dl_21ee4f8115b341dbadbf";
export const url=new URL("../icons/cookie-light.svg?v=95b7e4ea3f4602266a9796c15c1c9bb612efb452ea852f06f89e619d3297973f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
