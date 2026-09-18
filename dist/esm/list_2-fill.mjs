export const name="list_2-fill";
export const id="dl_f3336ed868294d229c2d";
export const url=new URL("../icons/list_2-fill.svg?v=5ce138154058b1fa60c1551f3bded89ecdb84fb945522acadf690fa1f28091c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
