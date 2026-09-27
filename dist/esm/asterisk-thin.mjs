export const name="asterisk-thin";
export const id="dl_1158260503a14effbfa5";
export const url=new URL("../icons/asterisk-thin.svg?v=600e1728f51d8b3a635269e2fd98be9829ebe7e135229e4f32cc0f10b98de41c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
