export const name="smiley-sad";
export const id="dl_e5ca22df72f0d00a0a2c";
export const url=new URL("../icons/smiley-sad.svg?v=6d78cbd59e3ab385b45264a1bf116a3e8e67c1afab0b73b30f6f125a2a478d36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
