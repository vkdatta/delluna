export const name="hov";
export const id="dl_11e4259f903a8e7f84c6";
export const url=new URL("../icons/hov.svg?v=f1450f9ee1fd2182e65f951988b8c21dc9865690a5cb16654d40b19a7bcb2030",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
