export const name="detector";
export const id="dl_98cf8df5accd464d7113";
export const url=new URL("../icons/detector.svg?v=69a003c584e64f4f938e271e7456735ae0096542200ba6b8c3668bf19b8b892d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
