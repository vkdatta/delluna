export const name="run_circle";
export const id="dl_735cc3533c205c8618ff";
export const url=new URL("../icons/run_circle.svg?v=ca49cb11294b9d5bfb9af43032e662418d9b3c70cc3fbdc8bdd217e3b3f054f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
