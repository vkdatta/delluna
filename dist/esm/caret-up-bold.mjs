export const name="caret-up-bold";
export const id="dl_f46c881fddc7424f9b55";
export const url=new URL("../icons/caret-up-bold.svg?v=21b501c15b34a36c10e736a5a57c05069ee573d8f9144423853781263cfcbece",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
