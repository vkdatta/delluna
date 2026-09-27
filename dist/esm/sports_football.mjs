export const name="sports_football";
export const id="dl_58420440a9cbe2775286";
export const url=new URL("../icons/sports_football.svg?v=d1fd22fe17c00c0d3cbb43e2bc50cb2b6367ed80a5b78fa0693a874efd20ef7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
