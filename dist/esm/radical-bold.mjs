export const name="radical-bold";
export const id="dl_13330c692fde4109849c";
export const url=new URL("../icons/radical-bold.svg?v=86f5b41364654d3d92a01171a5b8ca390bc4379400a6475d064b5bb74fa96910",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
