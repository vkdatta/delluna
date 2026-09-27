export const name="axe";
export const id="dl_a1dcc54c19904fa8a86e";
export const url=new URL("../icons/axe.svg?v=bbd252c0aec972b555539d684ce7ab4c087e4aeb9251f0a00ed4aefca3f822dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
