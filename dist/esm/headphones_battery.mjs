export const name="headphones_battery";
export const id="dl_ff91bb5bef6065ecd3b7";
export const url=new URL("../icons/headphones_battery.svg?v=ff7ab120dff4e9a6daae09299c5e72a4ba0e96f2a48100853b60a5d099fe7e83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
