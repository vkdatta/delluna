export const name="attach_file_off";
export const id="dl_f0f7a0b5ea4d4e5293cb";
export const url=new URL("../icons/attach_file_off.svg?v=2dca91801a4ea7c28f854f5a34855e0c66582be4eca3534231deeb613685619d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
