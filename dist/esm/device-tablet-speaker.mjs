export const name="device-tablet-speaker";
export const id="dl_4b5e78da52064728bdf4";
export const url=new URL("../icons/device-tablet-speaker.svg?v=f5d922cfa03969e5cca72e276a20ce9aee6f1c89ecddc84ac63939f76dfef6d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
