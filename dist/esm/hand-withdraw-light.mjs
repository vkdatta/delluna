export const name="hand-withdraw-light";
export const id="dl_bd38256f22bf419a8646";
export const url=new URL("../icons/hand-withdraw-light.svg?v=d9515ffcc90baaaf3fd48534c81f0a4c9bdbf795765ab945abca61ebe75a1424",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
