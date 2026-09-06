export const name="lucid_1-cookie";
export const id="dl_5427c4f147154ff5a781";
export const url=new URL("../icons/lucid_1-cookie.svg?v=4a3cb906c2b8a517e1b742469731980942b29846dc1243d3943dc79f78631d97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
