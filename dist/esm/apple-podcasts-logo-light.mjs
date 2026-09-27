export const name="apple-podcasts-logo-light";
export const id="dl_ce34c98bb1424ab98d9d";
export const url=new URL("../icons/apple-podcasts-logo-light.svg?v=c049a4fa0616d662e248c5c8c4004a9dfd60e84d09143d6a73aa355483b3a6e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
