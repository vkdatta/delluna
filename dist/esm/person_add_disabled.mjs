export const name="person_add_disabled";
export const id="dl_0a9124f4955923faa7ef";
export const url=new URL("../icons/person_add_disabled.svg?v=ac472a6f2a1d93570c4a76e3620ab7c8c62a1babd8ef1da0c05d2b6d72d549db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
