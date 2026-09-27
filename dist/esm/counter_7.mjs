export const name="counter_7";
export const id="dl_3db8259fccb3fbeea089";
export const url=new URL("../icons/counter_7.svg?v=7048d6ea6f1f95d947a0521bc8659c538f95823de4d47f111ecf6f88a52cb091",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
