export const name="seatbelt-bold";
export const id="dl_640d2bd4473736cbd850";
export const url=new URL("../icons/seatbelt-bold.svg?v=c304d82c763950a63b4c7378bada8dff556d82cd25b3d41b447f2eb0aa49715c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
