export const name="wheat";
export const id="dl_7907ae95a8f24867a6d6";
export const url=new URL("../icons/wheat.svg?v=2f8cd09a0b8f08aaed27dcd522af37a9547d1a6b6b72296749c0b10f4ad73e07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
