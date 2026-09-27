export const name="mosque-fill";
export const id="dl_ba47ecd1d7d344879da6";
export const url=new URL("../icons/mosque-fill.svg?v=af5338373e07e0f6e97e4d6477e5bd547fd1140c2fc417dfcd0e7ac87e812324",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
