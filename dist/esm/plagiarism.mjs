export const name="plagiarism";
export const id="dl_2e4a7ca3add4d016d136";
export const url=new URL("../icons/plagiarism.svg?v=9f1658a8d2e3a73e58fb6ed180e3de291603eb006ce2e0eb01804318d56f7d91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
