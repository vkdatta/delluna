export const name="trackpad_input-fill";
export const id="dl_1544ff629c32126fd8f7";
export const url=new URL("../icons/trackpad_input-fill.svg?v=b8ad116cf3fc829926084311fad5fed8f93ac1ec36a828c65a070673187058eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
