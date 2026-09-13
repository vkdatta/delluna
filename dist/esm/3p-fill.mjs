export const name="3p-fill";
export const id="dl_7f2bc53b720d43959f52";
export const url=new URL("../icons/3/3p-fill.svg?v=0a9648333c28216e947ba59ff7e07d23d39064bf2653b5c21d528486041d960b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
