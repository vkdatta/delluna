export const name="hourglass-medium-bold";
export const id="dl_6b71dc028a2b46a19ca0";
export const url=new URL("../icons/hourglass-medium-bold.svg?v=69fd0c4065d9f1e0a34a20a91cd4672f4ac6f331e570e55a2c708cfab9bc0778",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
