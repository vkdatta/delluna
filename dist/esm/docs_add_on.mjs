export const name="docs_add_on";
export const id="dl_e2e4a150b6504cce49fd";
export const url=new URL("../icons/docs_add_on.svg?v=91b2f224b83fc449fb3fd84d4e73ccc3bbce9966c7f2485ecde560109f21301e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
