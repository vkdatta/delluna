export const name="lucid_1-badge-alert";
export const id="dl_6b6d787a3b584258bc4e";
export const url=new URL("../icons/lucid_1-badge-alert.svg?v=5f60fb7ce1cd0e418c60e7584cb909e6dda89981e901e69ee131747e0dca712f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
