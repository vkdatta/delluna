export const name="fact_check";
export const id="dl_ce668d16bcb2c74328e9";
export const url=new URL("../icons/fact_check.svg?v=475896672c80935919089bb271de55a70b858ba21a5320255196796cfc453f4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
