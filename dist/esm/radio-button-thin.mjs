export const name="radio-button-thin";
export const id="dl_e1b90fdde7f044e6800d";
export const url=new URL("../icons/radio-button-thin.svg?v=9a7eba9f09c29d79f9add13b797edbd5557b04e745e7de662b123f5af0132a36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
