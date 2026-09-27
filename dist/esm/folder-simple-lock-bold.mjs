export const name="folder-simple-lock-bold";
export const id="dl_9b4a205da42a450e9f3c";
export const url=new URL("../icons/folder-simple-lock-bold.svg?v=e7ccc3bdad7d057bf678fdf118750aedf08fa06e68e8a53235339e169451b26d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
