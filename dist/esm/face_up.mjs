export const name="face_up";
export const id="dl_4d5b8e9edbb512605595";
export const url=new URL("../icons/face_up.svg?v=4d7fea2f82f5ae099cf934b76965fafc42a313005f479ce4713621092612fcb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
