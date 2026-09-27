export const name="brightness_7";
export const id="dl_ef75bf892e40d696bf1f";
export const url=new URL("../icons/brightness_7.svg?v=63b306e5e626a090d71968d019f76f6b61cca5e3d94e37c6446af5739559d686",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
