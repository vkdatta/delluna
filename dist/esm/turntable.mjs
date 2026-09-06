export const name="turntable";
export const id="dl_b050328c31a241caa0d9";
export const url=new URL("../icons/turntable.svg?v=61f96f0349a40443ea3ad2332cd389e3077e5e38aa6567d9c1650888bedd7441",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
