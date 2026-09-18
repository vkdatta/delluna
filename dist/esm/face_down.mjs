export const name="face_down";
export const id="dl_757aa22e90434afdacdd";
export const url=new URL("../icons/face_down.svg?v=44ca340e2a87bdd0178972f1dd399d94e2faf9903e8e4c36ea51afe49a4461bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
