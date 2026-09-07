export const name="star-and-crescent-bold";
export const id="dl_6710765cfbfa4576bd5d";
export const url=new URL("../icons/S/star-and-crescent-bold.svg?v=953be922191ea444a0360bafe601dbe6dd188ee239399a7daf9d5258b14c235d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
