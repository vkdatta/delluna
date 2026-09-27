export const name="bedtime_off";
export const id="dl_7ce96a9f69ad63397bae";
export const url=new URL("../icons/bedtime_off.svg?v=975e190adbfe2282b4904f172965aa2aebe5a7744b4a6729497b46d60784b858",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
