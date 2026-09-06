export const name="code-light";
export const id="dl_2ffec64305124ce799ea";
export const url=new URL("../icons/code-light.svg?v=7e1eafad649a79f5bf381ef23ab697557f8fe44529e4517aea10a3cc589e7bf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
