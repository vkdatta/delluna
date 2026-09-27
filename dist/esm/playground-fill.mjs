export const name="playground-fill";
export const id="dl_99172b1e433daddf70ca";
export const url=new URL("../icons/playground-fill.svg?v=27bd1973e317a2641f13b5551b41f81903a703b9f23ca7889b40d058b5de02de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
