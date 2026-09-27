export const name="123";
export const id="dl_0b5d90c2d6d9d70ece62";
export const url=new URL("../icons/123.svg?v=855053991654081166fe2db757c22f4d56ec09aa9e41350191c34f5031af896f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
