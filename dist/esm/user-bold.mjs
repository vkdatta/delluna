export const name="user-bold";
export const id="dl_3b1ee4442cbab44c07ec";
export const url=new URL("../icons/user-bold.svg?v=be8e54a8eb3653a4036e8b3a483c3b2fb04b5ee7deeac1e1887eaa4bf3ecaa75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
