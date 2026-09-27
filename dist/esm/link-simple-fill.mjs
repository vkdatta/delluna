export const name="link-simple-fill";
export const id="dl_d4b8c2d7071b45f7834c";
export const url=new URL("../icons/link-simple-fill.svg?v=fd9ab012ae0e207ee4cd8622e1dc4d99af7e3176d6c39ad28c521b863ca46afe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
