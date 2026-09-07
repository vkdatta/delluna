export const name="shovel-duotone";
export const id="dl_0164f459ab6d41bc9590";
export const url=new URL("../icons/S/shovel-duotone.svg?v=dc679035bd42e1c5e67249379b1bf00f7a37f1b1fc4e472c25a368638a7ebbe4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
