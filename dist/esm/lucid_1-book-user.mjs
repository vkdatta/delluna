export const name="lucid_1-book-user";
export const id="dl_4a0e580a7c904da8ab19";
export const url=new URL("../icons/lucid_1-book-user.svg?v=c997bdd88d5cf072f13ce31fb286e9d97429b73aa8361c8fef869849f8df7f9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
