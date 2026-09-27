export const name="arrow-counter-clockwise";
export const id="dl_24e97a7fd39945cba46c";
export const url=new URL("../icons/arrow-counter-clockwise.svg?v=5907543a8adc357010cccdc56cd793475f0ea7cb18b9aefe26314a54102461ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
