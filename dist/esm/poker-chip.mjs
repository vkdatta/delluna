export const name="poker-chip";
export const id="dl_5e5f68b6b0ca49b68aae";
export const url=new URL("../icons/poker-chip.svg?v=a1c7926e413df7ab96c551938e3b426dd0f4af3be2374e32cb587c6b2fe22cd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
