export const name="rebase";
export const id="dl_43787dd9cb9dac7fb9ed";
export const url=new URL("../icons/rebase.svg?v=be3c2d0a874355fca2d7fd5ae101f266e7ea507d95529aae39bf87dc6f14a594",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
