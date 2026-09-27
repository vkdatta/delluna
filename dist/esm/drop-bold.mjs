export const name="drop-bold";
export const id="dl_2e1348cca6bd48a4a8be";
export const url=new URL("../icons/drop-bold.svg?v=dcd64ac16ff49de533c63aed3d8ae97b25fa82375019ff06982c8e3bec39fd0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
