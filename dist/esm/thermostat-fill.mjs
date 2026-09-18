export const name="thermostat-fill";
export const id="dl_2a1465d84ed7432eb7c5";
export const url=new URL("../icons/thermostat-fill.svg?v=67e5f3f575bd18188ce2e1ee2e61ae44c369f7b8fc15c1cbb5bdad28f78316ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
