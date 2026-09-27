export const name="pencil-simple-line-light";
export const id="dl_386d51b085c0409c8a0f";
export const url=new URL("../icons/pencil-simple-line-light.svg?v=e1404ec1f3b595d5c4f9be8c916664a7c2c94c7b9ab029f4d54d1b709ce304ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
