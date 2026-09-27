export const name="timer_3-fill";
export const id="dl_e84d8e05ed276cfe6385";
export const url=new URL("../icons/timer_3-fill.svg?v=a11f1bd6cf65d2235f261364c38e6a8fc7a5a2e80900ccd52394cd38f93c3002",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
