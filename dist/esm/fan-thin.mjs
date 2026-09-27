export const name="fan-thin";
export const id="dl_7d8c23a8e8684c9db54f";
export const url=new URL("../icons/fan-thin.svg?v=b790f314cfadaa86426bfd62f656bed3f20beb6fbb8c77842911be71f30f4914",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
