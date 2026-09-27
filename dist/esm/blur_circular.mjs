export const name="blur_circular";
export const id="dl_1af908f4d1d66396b19d";
export const url=new URL("../icons/blur_circular.svg?v=21ee7ed60fbf38744bb9522e7fa757377508bd7fdd238ee170175732f348435c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
