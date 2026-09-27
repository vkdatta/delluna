export const name="border_color-fill";
export const id="dl_c351ffca0216db769464";
export const url=new URL("../icons/border_color-fill.svg?v=c914f802a61196ddbfa81356ceca1ff83475a054e96bb8148021f669ed1343e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
