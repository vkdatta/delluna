export const name="task";
export const id="dl_b65171fffd615c6bb925";
export const url=new URL("../icons/task.svg?v=cfd54f4b507e1645d792f2e906cf350e4385cd8dbbb36a7ab48a4d03af9fcc75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
