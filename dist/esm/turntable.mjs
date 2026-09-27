export const name="turntable";
export const id="dl_b050328c31a241caa0d9";
export const url=new URL("../icons/turntable.svg?v=b972cad8a9971740f5e06d8fa429b0e91997eb4da5f5193c17e79a5488914f9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
