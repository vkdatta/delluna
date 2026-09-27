export const name="number-circle-five-light";
export const id="dl_10248b181a8d46fe833d";
export const url=new URL("../icons/number-circle-five-light.svg?v=ae00ccf34a9534eb9cb8372bd88c4ebd7a0d864359b628165f0bcf914516e960",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
