export const name="add_card";
export const id="dl_1ae640d97f0e49749b9b";
export const url=new URL("../icons/A/add_card.svg?v=d93ed6df8e2412a0af12a0465ea474c183d9d2285c6328be022872421ce8ee0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
