export const name="panel_split";
export const id="dl_64249caa10e4d409b816";
export const url=new URL("../icons/panel_split.svg?v=c35bd3dba6b08a1085b41f5641eff8d2f0fea4d04b0e9e1aeb066c182ce705a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
