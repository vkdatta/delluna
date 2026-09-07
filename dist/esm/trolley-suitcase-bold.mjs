export const name="trolley-suitcase-bold";
export const id="dl_cb315e9be89f4095935e";
export const url=new URL("../icons/T/trolley-suitcase-bold.svg?v=f7b575499bddbda7b4936a21ad4aa50ca5bffb5e1b84d56b1badaaf91b069544",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
