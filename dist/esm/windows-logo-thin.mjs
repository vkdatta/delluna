export const name="windows-logo-thin";
export const id="dl_ffee3ab83021b191f414";
export const url=new URL("../icons/windows-logo-thin.svg?v=3754b87d5d0044e76b412dc449c0fd95e0e9680673a5d6e708f9764c46bb95d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
