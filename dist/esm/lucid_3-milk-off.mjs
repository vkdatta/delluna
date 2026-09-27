export const name="lucid_3-milk-off";
export const id="dl_61172184b281481c8326";
export const url=new URL("../icons/lucid_3-milk-off.svg?v=c6ca58e5ed84f1858ecbb3a4f306bb453874b91963669725a61f67e1224b01e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
