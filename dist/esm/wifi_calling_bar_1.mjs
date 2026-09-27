export const name="wifi_calling_bar_1";
export const id="dl_10e4916c938b93cc17c4";
export const url=new URL("../icons/wifi_calling_bar_1.svg?v=292ff24ff6633d04da1fbf3e29ee9d575049a07b92142693910dffea6308eaca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
