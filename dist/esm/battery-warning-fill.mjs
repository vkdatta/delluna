export const name="battery-warning-fill";
export const id="dl_5c11111055074d189ce7";
export const url=new URL("../icons/battery-warning-fill.svg?v=5976e7bf77d8a29328356db73e51626e30084815469c0a87f35bbbf846872bc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
