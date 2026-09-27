export const name="high-definition-light";
export const id="dl_8b2fbe0ed5ec40328ffa";
export const url=new URL("../icons/high-definition-light.svg?v=fc89b2873c0a83f85b9efb5e01fba5a9354c77b0fbc0b75e294ccb43cd0a59fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
