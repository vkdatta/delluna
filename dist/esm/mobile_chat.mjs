export const name="mobile_chat";
export const id="dl_6f7bbd5f260f4f23a21f";
export const url=new URL("../icons/M/mobile_chat.svg?v=b11f665cb64c87e8e556f7e9abe7710dd3ac18d3e1b445e2ad1952c0856f5db9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
