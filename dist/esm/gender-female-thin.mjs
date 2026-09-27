export const name="gender-female-thin";
export const id="dl_4c4dd7ccdf1b46b78c7c";
export const url=new URL("../icons/gender-female-thin.svg?v=347012098587104adf5b542d1999ec774669cf46a8a41aa44e3b85caf1f24f4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
