export const name="smiley-meh-thin";
export const id="dl_1a1021a236c49c9db1e8";
export const url=new URL("../icons/smiley-meh-thin.svg?v=66945046e9c1edc35a15b4e7cb8c1c7de50ace4b75d43e31db9d5839fb2f34bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
