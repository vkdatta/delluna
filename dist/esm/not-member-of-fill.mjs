export const name="not-member-of-fill";
export const id="dl_2808bad170bf4a948f0e";
export const url=new URL("../icons/not-member-of-fill.svg?v=24c778cc1ea9c6a6e6f53035b475b4b12ba67405f43dce1daa274e73305a6dab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
