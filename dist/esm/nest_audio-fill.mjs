export const name="nest_audio-fill";
export const id="dl_449c0784fbb751cb7496";
export const url=new URL("../icons/nest_audio-fill.svg?v=c3eed16ce99bc733b2d8651e508789b861609aa4da9dd9456ca2721a7ba52c6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
