export const name="thumb_up";
export const id="dl_c9d7ec9611b043f0b0d9";
export const url=new URL("../icons/thumb_up.svg?v=3bc042b9720fab0710c8d17df593412a339e97e397b88496e7283dfd9f34f74e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
