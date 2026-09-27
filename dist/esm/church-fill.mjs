export const name="church-fill";
export const id="dl_a7b242ed96a15f632ada";
export const url=new URL("../icons/church-fill.svg?v=b2043e1e6be4e47995de938951d407f2117f16462088e1c0a4a9b055479a69cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
