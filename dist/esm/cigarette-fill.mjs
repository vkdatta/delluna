export const name="cigarette-fill";
export const id="dl_6256e892dad442bc8819";
export const url=new URL("../icons/cigarette-fill.svg?v=1b857211072b83f65b8ba4dcb43350af9c9fd6c692d357a0c3311ffed1720551",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
