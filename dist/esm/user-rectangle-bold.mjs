export const name="user-rectangle-bold";
export const id="dl_05e7bac668df462da341";
export const url=new URL("../icons/U/user-rectangle-bold.svg?v=51ea11f69a0b363839f2da3706b232e4bc6b3be2ed23dc8954fad6b33cf526d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
