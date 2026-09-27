export const name="match_case-fill";
export const id="dl_0000c763d6657445ae2c";
export const url=new URL("../icons/match_case-fill.svg?v=32fb1c32e056532fe991c482b1dd2ddb58e4379bf79ad349a70856de39f23c72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
