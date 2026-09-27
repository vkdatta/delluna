export const name="undo-fill";
export const id="dl_705b00d109efef41723d";
export const url=new URL("../icons/undo-fill.svg?v=a54d5f07c4efa055df7c5863e05dd8076d61172fa4a837e7aa13dca759d8fe18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
