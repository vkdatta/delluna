export const name="lucid_3-messages-square";
export const id="dl_8927e2ff46ca41dd925d";
export const url=new URL("../icons/lucid_3-messages-square.svg?v=67632d26c45eb4046cb21af9c06569169bcef34f3b0e26b2ecb2381e8446321c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
