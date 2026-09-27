export const name="arrow-elbow-down-right-light";
export const id="dl_f62840b01d2f4678b438";
export const url=new URL("../icons/arrow-elbow-down-right-light.svg?v=68ea6185c58891694fddece770ff2cb0f8a557ecf7c352e9693304aa8c78b7fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
