export const name="space_bar";
export const id="dl_0ffc7a6947a4a17ebc0a";
export const url=new URL("../icons/space_bar.svg?v=bcf97a63a01abe39c45199e008b038135a98fad9f79d09cdafe1b01b691d595b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
