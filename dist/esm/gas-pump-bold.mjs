export const name="gas-pump-bold";
export const id="dl_d0abbf09bc2b42ae8fea";
export const url=new URL("../icons/gas-pump-bold.svg?v=3c3857f16a6ee1b04845d835c0bcb251b18c89c1db676aa88cf10d835a87333d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
