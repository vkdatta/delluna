export const name="sports_golf";
export const id="dl_d6fe19077952a3fedbf0";
export const url=new URL("../icons/sports_golf.svg?v=b2239278b7123d023bf770d4dc9851c4fb4e9f00d2af4d32fd811406559c77a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
