export const name="text-h-four-fill";
export const id="dl_31e90f5b0c628ae5779c";
export const url=new URL("../icons/text-h-four-fill.svg?v=71d62131b16e5f3d7fb166ae98bc54304dc673addb32e793028f6c69a07b1b10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
