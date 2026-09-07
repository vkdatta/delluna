export const name="empty-thin";
export const id="dl_020f1ab698d8462aac79";
export const url=new URL("../icons/empty-thin.svg?v=c54dff2a617280ef57bfb861972f40bb92f7c5cb8273b3a507cc5185bfb97302",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
