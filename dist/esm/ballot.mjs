export const name="ballot";
export const id="dl_dfdb687b2ed1543566f3";
export const url=new URL("../icons/ballot.svg?v=6c2fe8e03ecb1c2635978379e1e265271151fd87aa8ffc8ffa9001ce3ab21031",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
