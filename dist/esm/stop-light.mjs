export const name="stop-light";
export const id="dl_881696486e32e0dd0022";
export const url=new URL("../icons/stop-light.svg?v=cbc875f430865de98e436aa2a40659b5415632fd1568c2b661171058c0771f38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
