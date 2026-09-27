export const name="bluetooth-connected-light";
export const id="dl_8a9d0fa10cfe48fe90c9";
export const url=new URL("../icons/bluetooth-connected-light.svg?v=b6c30fa973eb08520c5d265474b77eb123786f60ce40f1c5d636324b55e535ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
