export const name="arrow_circle_right-fill";
export const id="dl_ef3bbc02f0e12c07b719";
export const url=new URL("../icons/arrow_circle_right-fill.svg?v=191db6ae1a14b3c8cb7c8c1e7d8ef549990b6255e813b8bcc2b6187d37ac7a2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
