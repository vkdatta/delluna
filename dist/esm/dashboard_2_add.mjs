export const name="dashboard_2_add";
export const id="dl_f0834da56ad0eacbc3da";
export const url=new URL("../icons/dashboard_2_add.svg?v=d978a857fdf30f72a639182cdd6e6ecb256cbdb1a9184524a6422ff15e9addb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
