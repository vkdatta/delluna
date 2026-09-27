export const name="backspace-bold";
export const id="dl_d22a9c672aaa4e69b030";
export const url=new URL("../icons/backspace-bold.svg?v=a26bcf1e7aaf3a63872209930214ada5b1468f4061f26e0b9ec7f89a3b79890d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
