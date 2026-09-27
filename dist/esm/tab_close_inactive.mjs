export const name="tab_close_inactive";
export const id="dl_7c62510ee9cd230d887d";
export const url=new URL("../icons/tab_close_inactive.svg?v=b7681b70a27c7d19eee75bec9617dd9f6847fc69321a53f62c264a83754240d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
