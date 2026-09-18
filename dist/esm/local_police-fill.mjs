export const name="local_police-fill";
export const id="dl_5fe2b13294df40b7aeb4";
export const url=new URL("../icons/local_police-fill.svg?v=f05976cac068dce35edf87132ad8d67c467690539b39a17da557d5574f051f70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
