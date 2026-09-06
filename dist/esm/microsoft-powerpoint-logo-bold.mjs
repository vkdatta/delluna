export const name="microsoft-powerpoint-logo-bold";
export const id="dl_1daf2f53d77142749e93";
export const url=new URL("../icons/microsoft-powerpoint-logo-bold.svg?v=88ba8ef179c0525f3eaab813eff8acbc9e88b2946ecf817707400678749134c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
