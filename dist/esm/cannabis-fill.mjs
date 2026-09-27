export const name="cannabis-fill";
export const id="dl_a27e75e89c5360c6b34d";
export const url=new URL("../icons/cannabis-fill.svg?v=4ed62b98bb28449c9c310784c59d82c8d6fae1e4a55d63e008c26f0189b93fcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
