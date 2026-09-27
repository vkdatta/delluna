export const name="user-circle-check";
export const id="dl_ca95db79b1b8ba6d500e";
export const url=new URL("../icons/user-circle-check.svg?v=502809424828773a568417da43aa082d6803fc1f48a1df224706c153ee0e690e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
