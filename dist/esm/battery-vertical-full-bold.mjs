export const name="battery-vertical-full-bold";
export const id="dl_52bbdc0ae3144050a979";
export const url=new URL("../icons/battery-vertical-full-bold.svg?v=da6dc183a5cc570cfb7eec2829aea3585d291505e9d27e15cc0ccb7f1551928f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
