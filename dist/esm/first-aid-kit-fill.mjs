export const name="first-aid-kit-fill";
export const id="dl_fae235eeaf144554908b";
export const url=new URL("../icons/first-aid-kit-fill.svg?v=580623fcffed61d9e0205844c26390255c55577ab2b215b6ec664168f6f495e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
