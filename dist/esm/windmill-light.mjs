export const name="windmill-light";
export const id="dl_22ef8af02e9983ecfb2e";
export const url=new URL("../icons/windmill-light.svg?v=1593245e1b536c5e64575a42b52a5706dd00650e86f4926e6bf6ab88772ba11c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
