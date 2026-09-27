export const name="scan-smiley";
export const id="dl_22c9e41d69da49d5ebf4";
export const url=new URL("../icons/scan-smiley.svg?v=df9a006b9f2ec40d5dc2c293e2cffcccc5d95ef5a960a767f1a8dd09551d111d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
