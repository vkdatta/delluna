export const name="battery-warning-bold";
export const id="dl_177bbb356b3f4677be98";
export const url=new URL("../icons/battery-warning-bold.svg?v=edd6867cdb98f1df3da4ca99995816e2b9e5d1936ed822bcc8f696c16f1f4964",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
