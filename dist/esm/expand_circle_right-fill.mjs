export const name="expand_circle_right-fill";
export const id="dl_27e1403c391813f51575";
export const url=new URL("../icons/expand_circle_right-fill.svg?v=54681c2023901c37b211661677819b9beb81f8f96aa870a0adbb62c4dcce9e00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
