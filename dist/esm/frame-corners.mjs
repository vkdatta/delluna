export const name="frame-corners";
export const id="dl_06d72f8396aa4f758d48";
export const url=new URL("../icons/frame-corners.svg?v=27e03b2435d77bafe183772250e84b6ec43a51161ea96c2c6213d2a86b47dc23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
