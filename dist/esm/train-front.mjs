export const name="train-front";
export const id="dl_c80a97aaa8d14433953c";
export const url=new URL("../icons/train-front.svg?v=665e320232aaa726bec3e736ec00ed1456d5398d69f48f96468f9e38b49b48ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
