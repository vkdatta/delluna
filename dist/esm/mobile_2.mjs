export const name="mobile_2";
export const id="dl_21f842a7ebafb002040e";
export const url=new URL("../icons/mobile_2.svg?v=97ac405002c343bd646af4a9abb78cac3b8a92f84b3574e27df87df677af77b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
