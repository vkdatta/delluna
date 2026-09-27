export const name="lucid_1-book-lock";
export const id="dl_1c67058694f84848a9e9";
export const url=new URL("../icons/lucid_1-book-lock.svg?v=6b813633066e9d14e7c66ac00dcbdcceebab445706a4e85d84715bec87822ddc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
