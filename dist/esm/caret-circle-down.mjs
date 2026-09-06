export const name="caret-circle-down";
export const id="dl_223adce4cd5c48ef90c0";
export const url=new URL("../icons/caret-circle-down.svg?v=a60fcc5a196c960160632f46060bb2db4e8ad9ef7ec7a54cde310cc5940c6e4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
