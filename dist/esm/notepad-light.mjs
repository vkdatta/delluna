export const name="notepad-light";
export const id="dl_29969a5b2ce7441cbb44";
export const url=new URL("../icons/notepad-light.svg?v=45bcbbb6ea7b2febb519b850dfc7aca163b7e4c68f47fe204c4391dc2018ea5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
