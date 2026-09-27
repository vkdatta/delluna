export const name="ticket-plus";
export const id="dl_764a3aa3578745b5b8a2";
export const url=new URL("../icons/ticket-plus.svg?v=b388f52661077dcc64b5834744473da5e48fe1566d8c0bf47d828ed81f7bbd61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
