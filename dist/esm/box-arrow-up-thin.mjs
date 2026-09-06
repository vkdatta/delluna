export const name="box-arrow-up-thin";
export const id="dl_c1abf4b351244837ab6b";
export const url=new URL("../icons/box-arrow-up-thin.svg?v=51e9a3e507755c73c859b45ea3adcde59d6dd0d9ea0750fa3df0b9e2c5c33f73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
