export const name="align-bottom-simple-bold";
export const id="dl_0b1b27018e254325b431";
export const url=new URL("../icons/align-bottom-simple-bold.svg?v=ecd2bf8aea811b71fded60e270de9a39c16d9e558a1517a02f2f12aeb15a7cde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
