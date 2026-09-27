export const name="cool_to_dry";
export const id="dl_56d2f7cd28f8a4b734dc";
export const url=new URL("../icons/cool_to_dry.svg?v=1961de4b59a7c3a63f484d6c64cdba42688fed1d675beb498a7c944c9c7f8569",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
