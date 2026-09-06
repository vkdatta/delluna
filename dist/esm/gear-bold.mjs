export const name="gear-bold";
export const id="dl_98e688caa6204bb2a269";
export const url=new URL("../icons/gear-bold.svg?v=b70f71ce6d08d59ee13575d7278737ff6dc2011adb5d126c9090641bc783fdd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
