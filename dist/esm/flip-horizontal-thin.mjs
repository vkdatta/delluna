export const name="flip-horizontal-thin";
export const id="dl_a11e61dbfc7447829163";
export const url=new URL("../icons/flip-horizontal-thin.svg?v=362668ca72be19deb8e215aa3cd8ba068eba9473dce4650f10a9b62cbf4c38d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
