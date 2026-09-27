export const name="align-center-horizontal";
export const id="dl_e2fb9bd5dac94eddb2e9";
export const url=new URL("../icons/align-center-horizontal.svg?v=738812cd3d4d9576a09cc9a617c3547acce492ded261bf180034bbfdc770d374",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
