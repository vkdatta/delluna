export const name="number-square-four";
export const id="dl_36c0ad10c1c940fd988e";
export const url=new URL("../icons/number-square-four.svg?v=5836c0283dd871fbc0bd594c8d6e835c4b6e7c99334ed4f5936eae977697c83f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
