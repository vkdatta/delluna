export const name="microsoft-outlook-logo-thin";
export const id="dl_df1c9ea85017446e8abc";
export const url=new URL("../icons/microsoft-outlook-logo-thin.svg?v=565f79dec5a4d5eba61a54853decf17960b340cc2adfb65dde20d2f0f575d5e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
