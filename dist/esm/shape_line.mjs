export const name="shape_line";
export const id="dl_ba2472bcef754a8fa513";
export const url=new URL("../icons/shape_line.svg?v=120318c8c3ed3b13e3ed14a8269a130822dff704b6db5d311bd8329a57e286c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
