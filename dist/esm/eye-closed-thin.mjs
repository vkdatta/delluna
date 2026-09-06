export const name="eye-closed-thin";
export const id="dl_f1d9fd7230524df189bf";
export const url=new URL("../icons/eye-closed-thin.svg?v=f78317ae668e69336badf58c5156b57c1769a04737174b1686a66486d3304a49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
