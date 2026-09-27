export const name="mobile_share";
export const id="dl_275f1c29dd86365eba6d";
export const url=new URL("../icons/mobile_share.svg?v=ba794faef6ceddea28c14c121942fa0e9b78bc7c0f9622ea6662bf6c77a436c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
