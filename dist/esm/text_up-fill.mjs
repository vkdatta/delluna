export const name="text_up-fill";
export const id="dl_0fdb37bafeecbaea1c8c";
export const url=new URL("../icons/text_up-fill.svg?v=d431f4db8d27012e9093a2df8e70929a73bb4f2e283cd28acda13a4ce994d54d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
