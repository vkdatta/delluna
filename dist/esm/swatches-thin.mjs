export const name="swatches-thin";
export const id="dl_3e79510093754a7caef5";
export const url=new URL("../icons/swatches-thin.svg?v=420139f103604e02bf44cd3b552f40bb40697def91433e89456cfe2b05e6f1e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
