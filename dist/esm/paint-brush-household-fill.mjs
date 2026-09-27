export const name="paint-brush-household-fill";
export const id="dl_1979194543ce472398b2";
export const url=new URL("../icons/paint-brush-household-fill.svg?v=167d0256f97060a182402a6213437133a1d317396e1a6c9928280cb6b83216e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
