export const name="stacked_email";
export const id="dl_8001faae955319a5237f";
export const url=new URL("../icons/stacked_email.svg?v=2ea3cd6976e9cef777f5dac5e0d8f2be4bc0bae428fa0ed4b76923487727adc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
