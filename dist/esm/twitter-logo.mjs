export const name="twitter-logo";
export const id="dl_ff36ccefb7d5b0ae5116";
export const url=new URL("../icons/twitter-logo.svg?v=499d61bf6ae192999bd7ea1a35b1b7503b340c61360ac3d931c11b9b69e4d703",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
