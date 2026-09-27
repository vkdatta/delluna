export const name="square-cross";
export const id="dl_fc9fefb1c08676e92bc6";
export const url=new URL("../icons/square-cross.svg?v=91678808d283c959d8d938332efebeab4b7b390c77d88f8397d07224faad76b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
