export const name="clock-afternoon-bold";
export const id="dl_3fe6b3c445554f4c8298";
export const url=new URL("../icons/clock-afternoon-bold.svg?v=bd0d0e011dc0cf3166d4192ed7ab312f1c96f196995623aec7dc80f6439bfa3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
