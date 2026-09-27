export const name="lucid_3-panels-top-left";
export const id="dl_237bb50671524639bf23";
export const url=new URL("../icons/lucid_3-panels-top-left.svg?v=129e1c7647cf122013f580ec9f451eb0aa02aeb9635eb11b927c224784d09cf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
