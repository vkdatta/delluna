export const name="barn";
export const id="dl_e32ce97ba51641f69789";
export const url=new URL("../icons/barn.svg?v=495a4a3baacb4332c35770f16f81739c5059a97e4ab960c9bb9eff39e005b87d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
