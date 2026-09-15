export const name="dashboard_2";
export const id="dl_93d229ff95014c1988e8";
export const url=new URL("../icons/D/dashboard_2.svg?v=53d41e4f0b7725874db7536b1d76b994a4b7dc70e67f8bd2efc5e0f7b95a2ef5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
