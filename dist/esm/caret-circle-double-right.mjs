export const name="caret-circle-double-right";
export const id="dl_ad61049a6c554385ac91";
export const url=new URL("../icons/caret-circle-double-right.svg?v=cab5ed440f12c46505f21df7f8cd56ad5f2659ea2fc1ada065494d50a7d7e474",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
