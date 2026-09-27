export const name="arrow-arc-left-thin";
export const id="dl_f11664ef750d4cd6a9ff";
export const url=new URL("../icons/arrow-arc-left-thin.svg?v=350db040db169c3a44c4af2d86f0000486e078483e85608518a5bf899a60a54c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
