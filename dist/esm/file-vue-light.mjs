export const name="file-vue-light";
export const id="dl_badbffbada724623a5db";
export const url=new URL("../icons/file-vue-light.svg?v=5e383c2d336582d85bdb82eb9d0e6a9db2fd9723a4d080015840a407e55da0aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
