export const name="lucid_1-badge-alert";
export const id="dl_6b6d787a3b584258bc4e";
export const url=new URL("../icons/lucid_1-badge-alert.svg?v=0b985ee026c59529eaf78ed6c0a43f6738e994adcd791102bdb79963aabe0eb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
