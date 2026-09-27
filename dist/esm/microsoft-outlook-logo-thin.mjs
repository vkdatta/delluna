export const name="microsoft-outlook-logo-thin";
export const id="dl_df1c9ea85017446e8abc";
export const url=new URL("../icons/microsoft-outlook-logo-thin.svg?v=6065ad854a3474dbd3daa6ca885e99fa4d40b275339e41a722e518887576c497",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
