export const name="tab_close_inactive";
export const id="dl_456ba0142ead4b479bb5";
export const url=new URL("../icons/tab_close_inactive.svg?v=190cc10f288080e773c148a8d55a07ffeed2b150dba0a2a236eb5909f7ab14d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
