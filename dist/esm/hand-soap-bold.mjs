export const name="hand-soap-bold";
export const id="dl_9441e6330fda4a7c875b";
export const url=new URL("../icons/hand-soap-bold.svg?v=1d1f89b9546cccb5c9742e63c6e509208d340b1b1730c648696b651de5500a85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
