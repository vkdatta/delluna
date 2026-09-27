export const name="moon-fill";
export const id="dl_6fd2e897240d44fc9294";
export const url=new URL("../icons/moon-fill.svg?v=baf8970293ec1f541e60e13529146c295524c9d153aacc12c0a1995fbd5ecdc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
