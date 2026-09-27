export const name="lucid_3-panels-top-left";
export const id="dl_237bb50671524639bf23";
export const url=new URL("../icons/lucid_3-panels-top-left.svg?v=13eadebad1f089c863a03decf623c79675145b6231bdbf76b61ac3e6d5b919bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
