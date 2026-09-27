export const name="number-circle-two-light";
export const id="dl_7c805359eb34494e9332";
export const url=new URL("../icons/number-circle-two-light.svg?v=be2735805ee22c2d42b3fc38d7987b5689e6454da4bf1d122cc075084eb6eb4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
