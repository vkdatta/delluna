export const name="burst_mode";
export const id="dl_cc11604c438983b11b4c";
export const url=new URL("../icons/burst_mode.svg?v=475dfb3049495bcc053471289124e596b03094174cdf7059d8333975c82fb6b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
