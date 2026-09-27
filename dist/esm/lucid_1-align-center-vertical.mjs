export const name="lucid_1-align-center-vertical";
export const id="dl_a50dd4630f1d4a7b84db";
export const url=new URL("../icons/lucid_1-align-center-vertical.svg?v=186e9b3a85925f6f2a55c1d2cafbb761fd5646fc105286fbbbb9cc2bcc8bf9b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
