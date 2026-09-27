export const name="bomb";
export const id="dl_ee822b2b84e448a094d1";
export const url=new URL("../icons/bomb.svg?v=1cbfdf0a2f4b597d25b1706e92cb0351328076f1d7ecf4a6f731261884972e98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
