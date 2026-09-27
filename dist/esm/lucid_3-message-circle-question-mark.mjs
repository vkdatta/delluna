export const name="lucid_3-message-circle-question-mark";
export const id="dl_76569506bec64ab7960f";
export const url=new URL("../icons/lucid_3-message-circle-question-mark.svg?v=24de99948016f3674e088a0410343d3b2010c642a9e8cc03292c079ebc9714c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
