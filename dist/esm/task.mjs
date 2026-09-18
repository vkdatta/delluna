export const name="task";
export const id="dl_1d281771254342e985b0";
export const url=new URL("../icons/task.svg?v=b5b117a333bf629d7cab4e6fff4f1eb2a05b9f0b5fd8948e958c7217ad182822",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
