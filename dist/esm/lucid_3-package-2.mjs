export const name="lucid_3-package-2";
export const id="dl_85c4136aa40f4b6b8211";
export const url=new URL("../icons/lucid_3-package-2.svg?v=3827e8e5ea0438d78145ec363b7b4e477b4af04d2c3e8a782d32d0d75af23caa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
