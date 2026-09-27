export const name="hand-fist-light";
export const id="dl_4fd89d42e70d45d98c6a";
export const url=new URL("../icons/hand-fist-light.svg?v=0b78bcfa1c124ba213ff5b7b1113f4c5ee778bac7a1545658dff0aa600b5847b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
