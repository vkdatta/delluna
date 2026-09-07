export const name="yarn-duotone";
export const id="dl_4e3bbf5b5b5a48f09299";
export const url=new URL("../icons/Y/yarn-duotone.svg?v=f923355a8fe045c9ad4215cfea49fcdb66db78a13ec9fb3f0e57cc705c5dfdfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
