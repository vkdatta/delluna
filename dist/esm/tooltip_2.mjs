export const name="tooltip_2";
export const id="dl_aa7bc604a614e4c33796";
export const url=new URL("../icons/tooltip_2.svg?v=2166f478b487521753f91a0ec2ce12ced04c1c276c179b31786b1734190d02f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
