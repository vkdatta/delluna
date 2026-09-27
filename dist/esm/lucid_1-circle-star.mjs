export const name="lucid_1-circle-star";
export const id="dl_a35e201ba04a4e44a1b6";
export const url=new URL("../icons/lucid_1-circle-star.svg?v=966879235c5c2335037849d4d12cbba016b066a87f2c3044da96160a38e61edf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
