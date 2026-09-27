export const name="user-circle-plus";
export const id="dl_bd84a22c7d50cbd38742";
export const url=new URL("../icons/user-circle-plus.svg?v=dcb4ff56019d997ad42c581d80fe62ff578fc7f3f04b84059f7b89fd4a69babb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
