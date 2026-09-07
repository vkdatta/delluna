export const name="bell-thin";
export const id="dl_597f42b5d1ad4aadb2ca";
export const url=new URL("../icons/bell-thin.svg?v=92c972a6ea058adefdb5f18be74696ac6ecbd00bda9ccfa27a78acd52623ecd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
