export const name="square-user-round";
export const id="dl_12b640bd6bcc41b693b2";
export const url=new URL("../icons/square-user-round.svg?v=338e17e7f68d250a486575a7ca992be6b2f95983dda68ea63243a4fc7f6b10aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
