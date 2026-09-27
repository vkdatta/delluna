export const name="tip-jar-bold";
export const id="dl_1cefe5887c6da65ad59c";
export const url=new URL("../icons/tip-jar-bold.svg?v=1967d81f47bfca9260db60e2293b31fd10bde28e81b2b54b67dd0858329ca305",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
