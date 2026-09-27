export const name="drop-half-bold";
export const id="dl_ee67f395d75e4342b6d7";
export const url=new URL("../icons/drop-half-bold.svg?v=3121fb2cc9b7b2344fd7f44e755f93c471dbeae87e1e38528bc610661bf253d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
