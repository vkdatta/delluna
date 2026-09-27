export const name="code-block-thin";
export const id="dl_584515a04d8146fab4a2";
export const url=new URL("../icons/code-block-thin.svg?v=70f4e33d66267001af4a6340c46dd4e47ef7a12f3125dc727448e50a73e94aed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
