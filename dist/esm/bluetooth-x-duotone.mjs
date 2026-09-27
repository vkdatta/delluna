export const name="bluetooth-x-duotone";
export const id="dl_1ea1168a329f40269157";
export const url=new URL("../icons/bluetooth-x-duotone.svg?v=82dff932417515d60cb6875f8fc5b75841bb2804311e1296b30c0996cafddcc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
