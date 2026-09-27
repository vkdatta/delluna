export const name="tilde-light";
export const id="dl_ae1f7a49c4b25c1c8bf4";
export const url=new URL("../icons/tilde-light.svg?v=1a20f5cb8271aea3e5e211b73e3fab70c79cb7c22ee69718eedf8310c78e7e57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
