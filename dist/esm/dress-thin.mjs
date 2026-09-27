export const name="dress-thin";
export const id="dl_e930d42a44974384a5b7";
export const url=new URL("../icons/dress-thin.svg?v=4b1890d2657c7f4e3707a0a711cb9c084bb055392a80ea86e9a8d8aefd2837d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
