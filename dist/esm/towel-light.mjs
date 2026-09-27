export const name="towel-light";
export const id="dl_f9d276e49ae4d9806e2d";
export const url=new URL("../icons/towel-light.svg?v=2e724705be93dc8e76964afb8d78e0b8a94b7d6d609bc441a895464a2fbe7ffb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
