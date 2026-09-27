export const name="flow-arrow-thin";
export const id="dl_4ab2cb26ccaf4059b905";
export const url=new URL("../icons/flow-arrow-thin.svg?v=0030bb6447129d65f8d539f13c33e49c7b75a3ce551c46242c71a841ad37d4fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
