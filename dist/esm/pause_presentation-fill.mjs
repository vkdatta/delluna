export const name="pause_presentation-fill";
export const id="dl_98b6fbed64e4472989e2";
export const url=new URL("../icons/P/pause_presentation-fill.svg?v=1e667697f337546ef193ea0cc99c90c0ff05ffeeb14c7bdbf9c2e665e4921173",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
