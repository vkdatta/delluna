export const name="moped-light";
export const id="dl_0010b0bb960d42f3b012";
export const url=new URL("../icons/moped-light.svg?v=8ac285d41fd821d42ac31bc6dd1f4c177cdd531d981c7deef6dae74734e02400",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
