export const name="park-thin";
export const id="dl_4cf5525c8dde42b9be45";
export const url=new URL("../icons/park-thin.svg?v=5b9d98745512d4525dbe6ef1b18fe7034bf29c3de9a451fb1724e8539faf9d55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
