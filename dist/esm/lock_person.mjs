export const name="lock_person";
export const id="dl_ba6ca2134d254292489b";
export const url=new URL("../icons/lock_person.svg?v=c9547e75533d9fb63f4e0eca7f0d9e5f981ba58342303017312af9629b34f657",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
