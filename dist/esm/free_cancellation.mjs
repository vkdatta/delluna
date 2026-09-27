export const name="free_cancellation";
export const id="dl_61395c54f5622f189907";
export const url=new URL("../icons/free_cancellation.svg?v=ab6eb6caae9d0349ed0360f2a35fe1de089a511f94243abdc6d55c73f0baa4ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
