export const name="home_storage_gear-fill";
export const id="dl_b5a4444af52690e78b4b";
export const url=new URL("../icons/home_storage_gear-fill.svg?v=f723fe89a8c3e3fbb06770ddf9aa90213d902554f8d25ce520f63d219586e584",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
