export const name="pencil-ruler-bold";
export const id="dl_92a6706751474439acc5";
export const url=new URL("../icons/pencil-ruler-bold.svg?v=8009e97b608afd1d70924c30c53e41153d275a15af43f907c7899e026b9af2bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
