export const name="repeat_one_on-fill";
export const id="dl_5b6492fb9a2f4018a22c";
export const url=new URL("../icons/repeat_one_on-fill.svg?v=3bd8b71afcd5498c1d028c66ba903bcd8a44f93b5044e5a3313327575c81b230",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
