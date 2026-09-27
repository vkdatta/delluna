export const name="info_i-fill";
export const id="dl_f2d04745c5293212a33f";
export const url=new URL("../icons/info_i-fill.svg?v=0282dae61f234ae63ca575b393f3da8966d7f4f5bed950684a79f0e8ccb1f6ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
