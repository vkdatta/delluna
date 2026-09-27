export const name="arrow-fat-line-down-duotone";
export const id="dl_2b05bf2739a545c5a005";
export const url=new URL("../icons/arrow-fat-line-down-duotone.svg?v=696c40dd534e1d937a0733bb0673868bdb935be04fc79974c39240cb4cbf1eac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
