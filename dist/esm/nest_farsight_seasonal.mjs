export const name="nest_farsight_seasonal";
export const id="dl_93a0570630853c1ee539";
export const url=new URL("../icons/nest_farsight_seasonal.svg?v=be5a21c7f58d2b3bcdeaa21a57869605dd0595784fb571f680f430d29d43f84d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
