export const name="arrow_back_2";
export const id="dl_09d0390659599b129cda";
export const url=new URL("../icons/arrow_back_2.svg?v=51a3c1eaed6c01604ce0a61fda0a14e17543dd3b87a68e0bc228af5225aadf69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
