export const name="elevator";
export const id="dl_68164fd1a531da71f159";
export const url=new URL("../icons/elevator.svg?v=02e07a434c27639a91018e92ee112510b27337a67077f2c39e38730682271a11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
