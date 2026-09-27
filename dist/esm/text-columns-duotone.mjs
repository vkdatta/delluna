export const name="text-columns-duotone";
export const id="dl_1b3ccf951b37e9bb3301";
export const url=new URL("../icons/text-columns-duotone.svg?v=dd0d0cad914d76ad1ef0f7d8bd7f9b10280f431338fda63433ec05d31e43d3e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
