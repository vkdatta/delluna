export const name="toast";
export const id="dl_981fa646cff0cf85a169";
export const url=new URL("../icons/toast.svg?v=0bfb57f33025711b608437e8a1d4a743b9931105235c76ca36dcdd16c9238d3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
