export const name="egg-crack-fill";
export const id="dl_706311dda4b0424caf07";
export const url=new URL("../icons/egg-crack-fill.svg?v=c57c1ffe2df95adf97ac9ffc411af72730a534dd3530502f744781a9e9d4d440",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
