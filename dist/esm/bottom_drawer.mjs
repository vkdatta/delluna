export const name="bottom_drawer";
export const id="dl_12feae3900bfc13348b0";
export const url=new URL("../icons/bottom_drawer.svg?v=2114c7596189487084ebf24697344662e81f7b1e8ece9d98d94b6a703a36cd0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
