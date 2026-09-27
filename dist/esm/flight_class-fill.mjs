export const name="flight_class-fill";
export const id="dl_f5cbdc20da8f75bdae9e";
export const url=new URL("../icons/flight_class-fill.svg?v=c632c9d20d7bf6fa5e1ff76d5f51c4590b592f50db5b17e1c485d80cab128d16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
