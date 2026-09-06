export const name="asterisk-fill";
export const id="dl_b81aa24e9049487fa2fb";
export const url=new URL("../icons/asterisk-fill.svg?v=ed010639133edbcb86f171af3215ba75e887f4d5afa001607041a930a86aae73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
