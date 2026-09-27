export const name="lucid_2-hand-grab";
export const id="dl_3da1836884484263b10a";
export const url=new URL("../icons/lucid_2-hand-grab.svg?v=34fb1a3e52d36aba4610bebf9ae3cc2a22ee96035424cd866df16375d8c9b05b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
