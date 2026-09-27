export const name="battery-charging-light";
export const id="dl_b3bc2486b3674648b122";
export const url=new URL("../icons/battery-charging-light.svg?v=6d9381ebddae33ba3fb14bc2b9c61af7c80fc2781d8d689ba8511ab7457309d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
