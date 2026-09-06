export const name="person-simple-circle-light";
export const id="dl_31d86dd0e516494eb6cd";
export const url=new URL("../icons/person-simple-circle-light.svg?v=dcc0be07c340129ba9083f1c39e9bc2e692d3fad8ac51876afc075c5ed3d8aae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
