export const name="pageview";
export const id="dl_60e9f6b9a07a4cb3acbd";
export const url=new URL("../icons/pageview.svg?v=d698efe99d7ebe351a4ee972d43257360379a1cbf985904f090ab6c2d5f8b504",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
