export const name="student";
export const id="dl_1a110abd01dd42b2ad95";
export const url=new URL("../icons/S/student.svg?v=bbc93acf83948884c13217d4fe68bc6dc54832128bdd89a25d1e8b1289ff0b4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
