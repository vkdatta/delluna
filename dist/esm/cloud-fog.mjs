export const name="cloud-fog";
export const id="dl_8a99760c9b0b4ee1a59e";
export const url=new URL("../icons/cloud-fog.svg?v=7cffb2eb68ef9e8791fc5a972c33ad5eb03e03f416aad890717db11023c85648",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
