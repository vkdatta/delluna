export const name="directions";
export const id="dl_f9ca5d6eab5f2960729d";
export const url=new URL("../icons/directions.svg?v=1852c34757f9db848cefa3b024c624630e28979e9639247ae233b622d4e42db5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
