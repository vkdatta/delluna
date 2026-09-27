export const name="logo_dev-fill";
export const id="dl_427d195e625e523981a0";
export const url=new URL("../icons/logo_dev-fill.svg?v=09f9b7e6353a7798b42e74d811c995921739cc980a149182d58bdf40aca39cc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
