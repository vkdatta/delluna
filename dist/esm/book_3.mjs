export const name="book_3";
export const id="dl_e4469c8a9e1c484dd3a8";
export const url=new URL("../icons/book_3.svg?v=bba9cbdb018f29b0a04f50fc1b466dfaced745b7bcb0d609c49ca5ed87a86706",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
