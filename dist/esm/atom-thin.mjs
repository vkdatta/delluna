export const name="atom-thin";
export const id="dl_9e1b4fb4133b48869487";
export const url=new URL("../icons/atom-thin.svg?v=c2d6a85e35e7295368b9aa779009e23d615c0d8e21679ebf92a71ce223d7cd42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
