export const name="x-fill";
export const id="dl_5545bff650bcc05bac88";
export const url=new URL("../icons/x-fill.svg?v=949ef19a9330916d6f0cc6b15bd28c7c1321c04e812b1cf678e288d9f7369e6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
