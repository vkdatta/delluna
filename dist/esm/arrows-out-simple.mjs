export const name="arrows-out-simple";
export const id="dl_2ac59544800c497989c7";
export const url=new URL("../icons/arrows-out-simple.svg?v=c0572ff15d6709fe4a3a505d93cfbab3a1edb9f0ac755f4cdcf572bf5f742818",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
