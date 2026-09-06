export const name="arrow-counter-clockwise";
export const id="dl_24e97a7fd39945cba46c";
export const url=new URL("../icons/arrow-counter-clockwise.svg?v=4eb160d5ae781107c674481ac081962e6bce6281a646129e6c3f960b9dd5dac6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
