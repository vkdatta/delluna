export const name="cameraswitch";
export const id="dl_c8777a62ba4d92c6a486";
export const url=new URL("../icons/cameraswitch.svg?v=e93a6801a45ee36ae2fb2850fa530bae8f66cc02896118134f98dc690c5290cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
