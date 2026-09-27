export const name="caret-down-light";
export const id="dl_4d3dbb1148364be29ee1";
export const url=new URL("../icons/caret-down-light.svg?v=cbc6e595591a51f40b20b9922cd538b768c86c74b47190ba5097edb2a32687df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
