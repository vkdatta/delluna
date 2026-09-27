export const name="line_start_diamond";
export const id="dl_e8f6924cce92b05cfc18";
export const url=new URL("../icons/line_start_diamond.svg?v=f7fabffcca42a3b71cb555004ac635c6771f8d41d55fccb27e1fa20d0d5f2972",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
