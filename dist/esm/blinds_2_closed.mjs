export const name="blinds_2_closed";
export const id="dl_1e0951fe5f8cd76ea7da";
export const url=new URL("../icons/blinds_2_closed.svg?v=93ef0090a30091693b7b5bad268dad2faa1df024033b4cd6e80ead2141d99f85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
