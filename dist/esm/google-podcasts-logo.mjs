export const name="google-podcasts-logo";
export const id="dl_cf92f7b2354e4ed682f3";
export const url=new URL("../icons/google-podcasts-logo.svg?v=0e485be71d003e0fa6eb98058ecf9411637b2992c343390f8354a88d61cc6576",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
