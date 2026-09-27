export const name="binary-fill";
export const id="dl_0a17650d634e48acb5d6";
export const url=new URL("../icons/binary-fill.svg?v=e8fa308976eb80f584f877633e273fe615f7f2b01e07e9ee877f36c8dd9db973",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
