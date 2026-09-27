export const name="arrow-elbow-right-up-light";
export const id="dl_01180db228314a519a0b";
export const url=new URL("../icons/arrow-elbow-right-up-light.svg?v=d23a6fdd4bf92ea28add3222108208879aa9670f587fd90a7db710c45ffb8ac0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
