export const name="battery-full";
export const id="dl_a64845c7d1194b2e9c3e";
export const url=new URL("../icons/battery-full.svg?v=99626598f286e1c73e23fb1024981665c9ec02cee7c2c705046312ca25adc9c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
