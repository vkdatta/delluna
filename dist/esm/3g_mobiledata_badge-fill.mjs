export const name="3g_mobiledata_badge-fill";
export const id="dl_e7651ca41f7f415aae3e";
export const url=new URL("../icons/3/3g_mobiledata_badge-fill.svg?v=71c196cec9875572180141ad34abb7dd7fc4397dcc9eaa055c1158a22ae37436",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
