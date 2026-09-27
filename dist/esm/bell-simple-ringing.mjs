export const name="bell-simple-ringing";
export const id="dl_e46a335edd854eaab98b";
export const url=new URL("../icons/bell-simple-ringing.svg?v=10e9ff71e42eeda8e4d60e4fad4fd5fa157d2d7170976b26c615e6d749c1804d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
