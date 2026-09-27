export const name="slack-logo-light";
export const id="dl_acb505504860a87908e5";
export const url=new URL("../icons/slack-logo-light.svg?v=f0b78e0f092460cc3f4b22537131206a1e83f1c33ec844e50bccbaf45efebcb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
