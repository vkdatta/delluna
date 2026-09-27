export const name="lucid_2-ear";
export const id="dl_fff9db7e9a8243bb8c55";
export const url=new URL("../icons/lucid_2-ear.svg?v=e56c6cc53010a04fb9a9c97de6215e5c1eac8d703d16651d9121829140ea8906",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
