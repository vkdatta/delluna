export const name="fallout-shelter-light";
export const id="dl_017885277e314e56b859";
export const url=new URL("../icons/fallout-shelter-light.svg?v=43ed9a318eac835efef2bde0f4d42f2eb77ff7f1da85f801f9a70f0e309c68fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
