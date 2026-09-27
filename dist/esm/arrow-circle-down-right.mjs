export const name="arrow-circle-down-right";
export const id="dl_86fd978a7d2a4762b6f1";
export const url=new URL("../icons/arrow-circle-down-right.svg?v=3c120e21771a14292c16e983ae76575c9a19398b91217a387359704867492aa7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
