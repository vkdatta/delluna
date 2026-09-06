export const name="angle-thin";
export const id="dl_0caf94238b8e4be78e02";
export const url=new URL("../icons/angle-thin.svg?v=cfd9dabc1c47c3111b68ae602576f2a593a7a296ce85a8fdeecf4d3e28a4739e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
