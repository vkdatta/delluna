export const name="battery-warning-light";
export const id="dl_cf5c3642f8164cfe8da2";
export const url=new URL("../icons/battery-warning-light.svg?v=3e271ecbcd2b26710d9fcc7b99e6df1ce0381fb52951228fcf91cdfa7a3677bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
