export const name="x-square-bold";
export const id="dl_9e1202b5a4510b5940a7";
export const url=new URL("../icons/x-square-bold.svg?v=0811658db07b2fc9528a30adf8aa864c7c0dc4160d4d402d8818965cae50bbe2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
