export const name="smiley-x-eyes-bold";
export const id="dl_8e3a9f611e3cc6708ebd";
export const url=new URL("../icons/smiley-x-eyes-bold.svg?v=b5fa854d64c756a20159403e2181295724ad89ef537b46e1493017c247596f57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
