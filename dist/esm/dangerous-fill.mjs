export const name="dangerous-fill";
export const id="dl_549146679d52f52b4ca2";
export const url=new URL("../icons/dangerous-fill.svg?v=d4583faef1062c7d2d991f57356355352af0cf107c915ad1320796a4f0b6f978",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
