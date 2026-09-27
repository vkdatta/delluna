export const name="paint-brush-household-fill";
export const id="dl_1979194543ce472398b2";
export const url=new URL("../icons/paint-brush-household-fill.svg?v=1d4ae49eee73b154c45c82ee45ee7ba462fd01cfdf551035caa788ad00190ccf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
