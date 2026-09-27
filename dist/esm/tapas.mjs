export const name="tapas";
export const id="dl_595473555109efb5ea6b";
export const url=new URL("../icons/tapas.svg?v=c4d0e0ef1d3cb8fa77de5613afd3536e9c53dd0d120b4161d9b3c2ea459c8867",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
