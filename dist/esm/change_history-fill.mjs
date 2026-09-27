export const name="change_history-fill";
export const id="dl_e7c7846e06a3589d0467";
export const url=new URL("../icons/change_history-fill.svg?v=bec3ee515ee2fa0e795f98a1551901ab76944ae7082358326d548ffb6e033477",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
