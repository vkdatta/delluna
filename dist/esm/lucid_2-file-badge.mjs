export const name="lucid_2-file-badge";
export const id="dl_995c05dc21a94d5bb594";
export const url=new URL("../icons/lucid_2-file-badge.svg?v=3995fcf1e851180badd4a5466910fa707d7ba41a8ef992a0864da594e1092646",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
