export const name="table";
export const id="dl_b44446d88fd5060f158d";
export const url=new URL("../icons/table.svg?v=e9221679031a2e2f6ded3886c4c990f33810aa8fe3a1491af5856c23cb14e93d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
