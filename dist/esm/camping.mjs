export const name="camping";
export const id="dl_4dadd9d4f1a63c2a02a8";
export const url=new URL("../icons/camping.svg?v=4b82af022c4cd22ab08e57a14ba6935aaaf9c765aa8fd5d1248db1c99d539774",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
