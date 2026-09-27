export const name="sliders-thin";
export const id="dl_993fd5df9fec75455fb1";
export const url=new URL("../icons/sliders-thin.svg?v=4c07bd29a7cbc06119e6f3459e85bfa243ba566f1a87063e2670d17cd46d3139",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
