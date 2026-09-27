export const name="landslide";
export const id="dl_75ae7e9db340815d4c6e";
export const url=new URL("../icons/landslide.svg?v=d1cab7e9448c3e29e6690356d80f400d1ca50cba82f1592f5b0251dbdcac6845",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
