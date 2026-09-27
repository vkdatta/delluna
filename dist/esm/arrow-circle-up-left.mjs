export const name="arrow-circle-up-left";
export const id="dl_964419c527974f21942c";
export const url=new URL("../icons/arrow-circle-up-left.svg?v=a0e39581d7aed3db2c0987ddb34b198b1d71e07bea5fa8ab1fd6ff7e2eef20f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
