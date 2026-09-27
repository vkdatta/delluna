export const name="keyhole-light";
export const id="dl_c8c9d7df5a174d1f912d";
export const url=new URL("../icons/keyhole-light.svg?v=a4a9c43e5d05f0f69f9af5676771c6b37cccb86f822f5d24d6d118b9f017994e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
