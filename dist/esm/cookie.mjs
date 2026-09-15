export const name="cookie";
export const id="dl_0d52f667e43c4393931d";
export const url=new URL("../icons/C/cookie.svg?v=6243cca0705b9954e2b42f75a5178a8f922e8bf4855b1b53a710571221b32de9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
