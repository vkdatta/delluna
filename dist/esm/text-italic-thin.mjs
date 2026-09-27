export const name="text-italic-thin";
export const id="dl_aae963f9e4b5a050dac7";
export const url=new URL("../icons/text-italic-thin.svg?v=8ab758117dcc18e8396b9e2179cbc5b7908772fac9654bd5a60018dacf1532a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
