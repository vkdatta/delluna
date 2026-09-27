export const name="lucid_3-message-circle-dashed-check";
export const id="dl_c392182306ad4c84863b";
export const url=new URL("../icons/lucid_3-message-circle-dashed-check.svg?v=c0fb2acc6141fe2eb62057df318563a12bcab3a6a8a6a12622346be9517b5cf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
