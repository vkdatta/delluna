export const name="arrows-out-line-vertical-bold";
export const id="dl_1e0cd554c44b470bbb34";
export const url=new URL("../icons/arrows-out-line-vertical-bold.svg?v=bdd61b14a3a37dc913a3608edfbf57c8e9b56e5cc991986eb6a5be525fa19809",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
