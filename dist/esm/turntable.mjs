export const name="turntable";
export const id="dl_b050328c31a241caa0d9";
export const url=new URL("../icons/turntable.svg?v=eeb286ca232ed04dfe209132ce4078e6a7be6b575c1ecf254b227780f530cd6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
