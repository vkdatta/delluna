export const name="train-simple";
export const id="dl_50e599d0a650fd5558c2";
export const url=new URL("../icons/train-simple.svg?v=152b4b2df31df82f6b13124b1b8f538ad63b25b05c7ec8db98133e94d0f1e929",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
