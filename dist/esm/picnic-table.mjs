export const name="picnic-table";
export const id="dl_0c15448ee0374d248d35";
export const url=new URL("../icons/picnic-table.svg?v=3af5ea943e39d67626f8665892e9db57986c89595e498e4fee30d31f7d654377",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
