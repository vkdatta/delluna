export const name="lucid_3-pin";
export const id="dl_6ede4a5f89724d77b1dc";
export const url=new URL("../icons/lucid_3-pin.svg?v=1cacba3374160aa3554b228b03e15f81db0202c6481f6c8cfef4b26966781176",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
