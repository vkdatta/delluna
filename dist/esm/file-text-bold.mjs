export const name="file-text-bold";
export const id="dl_d09734bff25d4d19bacd";
export const url=new URL("../icons/file-text-bold.svg?v=388d1e2b234abb5a509c86e08d85e077b77518b31ef61c87bfece8dbb361e2cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
