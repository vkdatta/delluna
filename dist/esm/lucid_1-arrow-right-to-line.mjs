export const name="lucid_1-arrow-right-to-line";
export const id="dl_733ef2dab4e748088858";
export const url=new URL("../icons/lucid_1-arrow-right-to-line.svg?v=353973c25ed5baffeccc759f801467584a9d61d2e2265f17e21d601bf85017a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
