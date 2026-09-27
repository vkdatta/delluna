export const name="brightness_6";
export const id="dl_47afab1ec6f1665a70ca";
export const url=new URL("../icons/brightness_6.svg?v=4660d0b9ddef0e6eb03776d8e1ad6d7b9178d5971b623e6be6ff9a47d6e612b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
