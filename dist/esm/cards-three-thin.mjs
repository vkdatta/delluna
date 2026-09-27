export const name="cards-three-thin";
export const id="dl_92275f99e9ba40ce8aaa";
export const url=new URL("../icons/cards-three-thin.svg?v=975303018cbe76205b3faa199404347e732c2328242d714a81ab10626722c2a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
