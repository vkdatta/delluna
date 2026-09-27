export const name="dice-three-light";
export const id="dl_954cbb96891a4887beb2";
export const url=new URL("../icons/dice-three-light.svg?v=886887859889f925f60933db2202411886f61cef166beb624f6f4721e8cac7f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
