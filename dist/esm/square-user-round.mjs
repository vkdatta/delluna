export const name="square-user-round";
export const id="dl_12b640bd6bcc41b693b2";
export const url=new URL("../icons/square-user-round.svg?v=fc6c8ecf89f9cdd015e0760c2bd0412a1305f2fafad1afe3b3eb298d6ce8dd78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
