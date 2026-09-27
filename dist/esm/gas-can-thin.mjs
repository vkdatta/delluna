export const name="gas-can-thin";
export const id="dl_e71cbe5bf6144b7cac7d";
export const url=new URL("../icons/gas-can-thin.svg?v=c27035b043d6836136137237b46f2212f47688004ea93b4db20613b0dcc606b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
