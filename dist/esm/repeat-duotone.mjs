export const name="repeat-duotone";
export const id="dl_923f5e9c930b4d339515";
export const url=new URL("../icons/repeat-duotone.svg?v=fc984856bb5a99e0ab249e0141777063e95eba36ca8a019c39e189c6b2bc8af8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
