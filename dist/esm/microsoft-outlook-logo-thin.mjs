export const name="microsoft-outlook-logo-thin";
export const id="dl_df1c9ea85017446e8abc";
export const url=new URL("../icons/microsoft-outlook-logo-thin.svg?v=8461e5cd460a2e620f5e73f90ededd138b70e0eff8b75a2b457bb8e3af94eca8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
