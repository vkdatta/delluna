export const name="stack-simple-light";
export const id="dl_3bcbf33d75f070275cdc";
export const url=new URL("../icons/stack-simple-light.svg?v=3f66f2b87fc4e07f1412d81e1172659d1545a696bf45a4f1e1a0b2e1e895bb5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
