export const name="share-network";
export const id="dl_a145007d3446c5619f05";
export const url=new URL("../icons/share-network.svg?v=b521bc609c41ff2dcfc34af9d4f7b3db687ef185f032b94b0febf58fa48ab7f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
