export const name="tv_guide";
export const id="dl_1ab6f06de997917fbddf";
export const url=new URL("../icons/tv_guide.svg?v=856532c4fd5cec18b061c898d5df3b80006ffa884ab8733728b2c8ffdcda9bfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
