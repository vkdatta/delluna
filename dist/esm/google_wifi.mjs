export const name="google_wifi";
export const id="dl_242b30b0fb87310252b8";
export const url=new URL("../icons/google_wifi.svg?v=5d9d1203e919ee7e587f173e371966b16a89fd8285af455a1fa7c187f3f9595c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
