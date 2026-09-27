export const name="castle-turret-thin";
export const id="dl_4c2e757646da410bafba";
export const url=new URL("../icons/castle-turret-thin.svg?v=07e0395c92c06b2d6edd451011db0e8b15795c4e3ab5ee126241ecafa569c87c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
