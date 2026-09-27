export const name="pencil-circle";
export const id="dl_08b9d2f0ecb34faa9ff4";
export const url=new URL("../icons/pencil-circle.svg?v=a5a39f0837555d4192be3a77cb185a9f50337f4099f0f4d60b80444ff76749d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
