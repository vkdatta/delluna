export const name="egg-crack-thin";
export const id="dl_4f0ce2f93ccc4062b7cc";
export const url=new URL("../icons/egg-crack-thin.svg?v=9052e1904db8e41df3941618b0258e6515e931a8c2194fc22090e7ad4f02be45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
