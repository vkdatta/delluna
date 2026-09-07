export const name="cloud-rain";
export const id="dl_033a16b03c544356b821";
export const url=new URL("../icons/cloud-rain.svg?v=87b26b17df248c1863be81a1798933ccb5ad42b41afd2ffdef4a38c987588c5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
