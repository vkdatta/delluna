export const name="baby-thin";
export const id="dl_9b1257bef9044c04b4a9";
export const url=new URL("../icons/baby-thin.svg?v=eb71f1450c09f67a23357c69e7679cfaf0f4ef7c842ba5e919647b4eaef90170",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
