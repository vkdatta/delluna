export const name="4k";
export const id="dl_9d12d0c76bf0b3b1314d";
export const url=new URL("../icons/4k.svg?v=08e1bb8ddf15ed8c9be4c5ed608a929bb9b84cad856b1343c59f764e8b66de05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
