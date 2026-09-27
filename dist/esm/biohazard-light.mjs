export const name="biohazard-light";
export const id="dl_68c30ce1274f4daca0b2";
export const url=new URL("../icons/biohazard-light.svg?v=a18e9ec0d4a068ad5f817977c3d5f4206d001d16ea5263415540d5f4ef972f45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
