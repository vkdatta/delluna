export const name="google-photos-logo";
export const id="dl_055ff1ce13b24228b03b";
export const url=new URL("../icons/google-photos-logo.svg?v=1e1f1f0ef59a6dde135f6ca0c7c953674b91a4031cb34b3aef5a0850c05b03c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
