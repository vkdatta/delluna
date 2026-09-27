export const name="show_chart-fill";
export const id="dl_4d31fe29045f8e616ace";
export const url=new URL("../icons/show_chart-fill.svg?v=66177ad6b2eb0d61c9d37b7496d9e1454ec89870f0a8c352797d2e7b8fe53947",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
