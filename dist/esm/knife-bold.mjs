export const name="knife-bold";
export const id="dl_3cbf4fc8e730417483fb";
export const url=new URL("../icons/knife-bold.svg?v=0fda37cd27fcfa31bf41c9e15d6edd936123d15ed577969c1779900fb70b0c26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
