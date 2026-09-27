export const name="face_3";
export const id="dl_68928c515837f85ef5ae";
export const url=new URL("../icons/face_3.svg?v=5a4d03a8943111c3c0cce6f41b579697ff09bbbad69ff546941f82ab1dd6f3f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
