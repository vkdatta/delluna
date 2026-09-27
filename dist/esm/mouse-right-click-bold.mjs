export const name="mouse-right-click-bold";
export const id="dl_ec29e2578cce4eae8041";
export const url=new URL("../icons/mouse-right-click-bold.svg?v=adaa82b746bef3b262671e297713f453716caa45b6617c0baef9acb7de4ed289",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
