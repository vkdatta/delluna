export const name="person-simple-tai-chi-fill";
export const id="dl_0a867ae8365347f88010";
export const url=new URL("../icons/person-simple-tai-chi-fill.svg?v=65002c7e3e748363151720d9b8ff395d4c6e03dfc3ea36dceff659d81d52c4ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
