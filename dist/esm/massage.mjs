export const name="massage";
export const id="dl_12a91ed4d2c1b74056e2";
export const url=new URL("../icons/massage.svg?v=9d74faf77bc274b7d423fa967a3b0465e6a93374a0dbe9e1d7be2f7fbcf3a3e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
