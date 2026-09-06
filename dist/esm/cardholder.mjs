export const name="cardholder";
export const id="dl_1a1ab9528a4d49d6837e";
export const url=new URL("../icons/cardholder.svg?v=6ae466b377cc69d8af17de6ec793801f63b4c64877babacce29adce66c8259e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
