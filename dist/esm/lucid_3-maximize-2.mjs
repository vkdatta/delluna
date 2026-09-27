export const name="lucid_3-maximize-2";
export const id="dl_9e86579b7acc495b8755";
export const url=new URL("../icons/lucid_3-maximize-2.svg?v=098cb87777f2553b18871f65496feef3b2a2c7c10bac400179486f78d1e5dcb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
