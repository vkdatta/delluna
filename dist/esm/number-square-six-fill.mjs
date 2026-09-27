export const name="number-square-six-fill";
export const id="dl_55d75b34255b41aea38f";
export const url=new URL("../icons/number-square-six-fill.svg?v=b34ce306510e48de8e8c9c4719c230b7c5429ae3fcf9af452fc5085b0c760fd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
