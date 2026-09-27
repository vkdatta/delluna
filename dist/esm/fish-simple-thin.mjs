export const name="fish-simple-thin";
export const id="dl_19933477be6a4fb7810d";
export const url=new URL("../icons/fish-simple-thin.svg?v=8cd7bfb50465dfa0eed982051ddbabfb1d2aa6d472f5121b2964287ee565b479",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
