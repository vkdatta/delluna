export const name="file-vue";
export const id="dl_61f6d5063d2e4dc68fe4";
export const url=new URL("../icons/file-vue.svg?v=0545e0327f34cacee2c533d9db12020d1e6528e28d981a65cdd1181d76b7930a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
