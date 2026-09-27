export const name="lucid_1-circle-arrow-out-up-left";
export const id="dl_5be149d43dc0464c8227";
export const url=new URL("../icons/lucid_1-circle-arrow-out-up-left.svg?v=d2ce234039fe5796d9e7236d93f379b92b2fe15de1b6f4b91a73acb43b562103",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
