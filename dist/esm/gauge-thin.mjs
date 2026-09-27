export const name="gauge-thin";
export const id="dl_7a99ca8fcf4d49d29d4d";
export const url=new URL("../icons/gauge-thin.svg?v=972aff096d5fe120209e4a061e9f6c572f7c5ad67d6ae0e03127f3cfc5f9227a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
