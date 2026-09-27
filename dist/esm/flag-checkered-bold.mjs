export const name="flag-checkered-bold";
export const id="dl_8543374f1c6242f79ac5";
export const url=new URL("../icons/flag-checkered-bold.svg?v=f684fc085af88b870c7f11c15e0469e33ae856b401fded59d5273578a244b5fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
