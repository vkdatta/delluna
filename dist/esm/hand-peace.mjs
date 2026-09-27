export const name="hand-peace";
export const id="dl_30bfaebbe5aa4ac3baa4";
export const url=new URL("../icons/hand-peace.svg?v=cef9141d61ff0ed96ed5e7d8ca2e6a07f40ff214c8cc50d94d5df8604121d340",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
