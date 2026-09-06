export const name="google-photos-logo-fill";
export const id="dl_891baf93941d4c818b97";
export const url=new URL("../icons/google-photos-logo-fill.svg?v=6c7cb76213f713cd920ac297cb924617824af942150c222e441cb8cfbfc62269",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
