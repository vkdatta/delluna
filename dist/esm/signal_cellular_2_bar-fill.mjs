export const name="signal_cellular_2_bar-fill";
export const id="dl_501fe5c67756b5e99b90";
export const url=new URL("../icons/signal_cellular_2_bar-fill.svg?v=789eb926ce4d260df95d1a39bbb893b398d4275104fcacdcfb15dfa7d9a12dc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
