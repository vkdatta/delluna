export const name="avocado_bean";
export const id="dl_fd09ef18124243b58a7e";
export const url=new URL("../icons/avocado_bean.svg?v=c6b91d2a0edea05eb0b0d0e360d6bd31b830ec581a6636c1643ad2cbc271b98e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
