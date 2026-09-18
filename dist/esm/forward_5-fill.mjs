export const name="forward_5-fill";
export const id="dl_9d388cced7c143e6841e";
export const url=new URL("../icons/forward_5-fill.svg?v=821cc7a280e2bbce1b204d9cec9dcde2a024b831f9ee30ab4962a046803ff048",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
