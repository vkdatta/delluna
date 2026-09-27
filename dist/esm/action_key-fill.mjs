export const name="action_key-fill";
export const id="dl_8b695b4ab3f1846dc3f6";
export const url=new URL("../icons/action_key-fill.svg?v=fb83a62f402c2757af85c9a57378e81aab10163a21f0b739e6d055abd95516b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
