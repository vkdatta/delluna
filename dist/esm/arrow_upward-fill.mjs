export const name="arrow_upward-fill";
export const id="dl_81956b2a104d1834255a";
export const url=new URL("../icons/arrow_upward-fill.svg?v=02d84c113656f6f529710539f38e075ef67937705a942d1b1113956dbc336f72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
