export const name="toolbox-thin";
export const id="dl_66aff217cd170a431b60";
export const url=new URL("../icons/toolbox-thin.svg?v=635fb871e33547d571385ef7e00153038bd4fef1af6a13051422995731523276",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
