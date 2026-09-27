export const name="brackets-angle-thin";
export const id="dl_4beacb3128d84f9082c6";
export const url=new URL("../icons/brackets-angle-thin.svg?v=78add99c3e140cf55511bba7c159bbaaac6e539ba495dea08a33890caf5c7f66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
