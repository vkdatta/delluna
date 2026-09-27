export const name="tally-2";
export const id="dl_151768dbfae84f6bb3e1";
export const url=new URL("../icons/tally-2.svg?v=3462b53474026a3f80ff2439bebe5508cedc6c27324d94d8f29668d583b00856",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
