export const name="flow-arrow-bold";
export const id="dl_47242db022e94b49ba47";
export const url=new URL("../icons/flow-arrow-bold.svg?v=370729581dbcdb2eddc99523582fbc4f0a449c89fe177ace308066e10593a9b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
