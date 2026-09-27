export const name="rabbit-duotone";
export const id="dl_2a473cc2fa0442dd97de";
export const url=new URL("../icons/rabbit-duotone.svg?v=0b1c3ecf80219d51f8555ae0d2ebb92ee87a8e254c5a2cca5560409009f83b9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
