export const name="eject-thin";
export const id="dl_9b7514e3987f40ad9025";
export const url=new URL("../icons/eject-thin.svg?v=ca5efdc3aac1ddbb6b39d377d16fdab7ac1c3a16c9188d6ec8c22d568f0e70d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
