export const name="chat-text-bold";
export const id="dl_b7f780f1294340c39b1f";
export const url=new URL("../icons/chat-text-bold.svg?v=cdab2b1c979c37c0331fbf3ebdd4910172fcdef645ab11062fd5156277ad4c60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
