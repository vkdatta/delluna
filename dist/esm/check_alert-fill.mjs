export const name="check_alert-fill";
export const id="dl_4216c37b8ff23b991c0c";
export const url=new URL("../icons/check_alert-fill.svg?v=24f8beb649040d1645f79b5c7c1989bbb8382a4e89ef56695a29c70e9d389057",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
