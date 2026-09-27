export const name="ear-slash-light";
export const id="dl_0e37337e2e254b949aba";
export const url=new URL("../icons/ear-slash-light.svg?v=bc1d4a21778187e746e8e5d4e1a8649ef55322a60332bef1c340970e0b9e4117",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
