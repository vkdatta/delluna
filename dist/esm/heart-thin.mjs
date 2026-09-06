export const name="heart-thin";
export const id="dl_8110df4d8ebb4a128c43";
export const url=new URL("../icons/heart-thin.svg?v=3ec57140f4aea8f4c3f0e5fa1119e4573778fb30c361cdbcf9ee08cb6ed3c4d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
