export const name="lucid_1-calendar-plus-2";
export const id="dl_7d6375cb804f4b9bb76d";
export const url=new URL("../icons/lucid_1-calendar-plus-2.svg?v=f7c260a4cca3f3eb0795fa97b94a27dd6928f1707dd0409b1a875b0bcc454d66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
