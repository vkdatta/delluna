export const name="axe-fill";
export const id="dl_288ded07b14d46549d24";
export const url=new URL("../icons/axe-fill.svg?v=0aa688dec7c3175367b17fc4f6c6a9a8059bad542cf1f85916cfa9f5ce182201",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
