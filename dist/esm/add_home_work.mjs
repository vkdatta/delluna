export const name="add_home_work";
export const id="dl_5a1bfc4b1e214ca4a671";
export const url=new URL("../icons/add_home_work.svg?v=000f6ce2ad8ddf385471353a08831f8c8f068b109f4a51fca48b96924d706b42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
