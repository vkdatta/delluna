export const name="nearby_off-fill";
export const id="dl_78e608ef9327ad37a649";
export const url=new URL("../icons/nearby_off-fill.svg?v=aca073e7a35f7e679528c6315d8958dc7d0470a48dcc8822169fed94fb7cb713",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
