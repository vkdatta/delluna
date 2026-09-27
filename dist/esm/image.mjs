export const name="image";
export const id="dl_0e16e918a3710bd22e61";
export const url=new URL("../icons/image.svg?v=b8935a0deb0eb2f5e35fd198d220afbda0c462feef41ead509e409bf1c4fb4f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
