export const name="pint-glass-light";
export const id="dl_da16fa19fe3348bbb835";
export const url=new URL("../icons/pint-glass-light.svg?v=5916b7c11706b531f4f9306aa0b26f135e007b4e08a6cfb1d5cffcbfdf167eda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
