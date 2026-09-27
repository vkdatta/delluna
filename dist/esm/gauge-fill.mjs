export const name="gauge-fill";
export const id="dl_71baee47768a4b70a564";
export const url=new URL("../icons/gauge-fill.svg?v=c0f7cf3569c839de29bea7cab7a29b8e0912b925a51fbcd02ec283edfeee6fd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
