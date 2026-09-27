export const name="selection-plus-bold";
export const id="dl_203b15cdfcb1ae93f577";
export const url=new URL("../icons/selection-plus-bold.svg?v=9db2a2105b131f82d87ef47ef8607bf30db6fdd6a094894c4e3fef9e81f4a966",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
