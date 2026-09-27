export const name="plus-minus";
export const id="dl_5205df930d4040d4a4ba";
export const url=new URL("../icons/plus-minus.svg?v=f85eb082eb11af4ab2480fd8d76050b8c19ce5554531e7aae7d452f9897ec897",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
