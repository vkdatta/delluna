export const name="outbox_alt";
export const id="dl_d5a6da23be57683901e0";
export const url=new URL("../icons/outbox_alt.svg?v=8ffb6f21a9cf265d6d6055933be26f7e97efda046be5e7c9d90332ae715018ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
