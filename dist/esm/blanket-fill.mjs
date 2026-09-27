export const name="blanket-fill";
export const id="dl_d46a0bcdee1397fd3eb3";
export const url=new URL("../icons/blanket-fill.svg?v=85282d84e7c2dea52a82e587cbbce41e6a57ffecb625a6c49784e61905a576a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
