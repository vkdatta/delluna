export const name="vibrate-off";
export const id="dl_c0d57ba9a81348959cde";
export const url=new URL("../icons/vibrate-off.svg?v=fe006de84988b14d23c3ed7eef8619dc341c3e04519a5424e4e74beb3ff767de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
