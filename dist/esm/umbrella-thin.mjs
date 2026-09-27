export const name="umbrella-thin";
export const id="dl_93dde65ada306bfa91a6";
export const url=new URL("../icons/umbrella-thin.svg?v=65647f4d2a81cf430958db0e7fc83c9ff97e1274a3089cc5137356e900f26797",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
