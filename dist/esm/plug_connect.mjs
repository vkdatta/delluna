export const name="plug_connect";
export const id="dl_2d643c5d5ed73f581a3c";
export const url=new URL("../icons/plug_connect.svg?v=eed2cf42e9030c7b040a06b7d067205b0642df1ebf81094ea9bd54adfa793bf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
