export const name="elevator-duotone";
export const id="dl_91f36e9bb9ee455db642";
export const url=new URL("../icons/elevator-duotone.svg?v=2dcc65e2c519ca29910fb10a6449ed0da5d5c854f4a87b6277eb86d44f8a6308",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
