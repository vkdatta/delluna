export const name="adjust";
export const id="dl_519c24fada6ee9da79f0";
export const url=new URL("../icons/adjust.svg?v=1525a7a127cf09488f34c37f200d9fb05604eaef16e1b763c1d64062f79e493e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
