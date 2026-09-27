export const name="hourglass-low-thin";
export const id="dl_db270f1cbbab4accb01b";
export const url=new URL("../icons/hourglass-low-thin.svg?v=0f20f3c3928a84145da49889273731727d15879b9bfd24e7a6ec61f9753a23e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
