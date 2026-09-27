export const name="exam-bold";
export const id="dl_6e7aebbf96164b97bd4c";
export const url=new URL("../icons/exam-bold.svg?v=0b2f672f7950f5149835e498eee324ff48b995d2a420dd9d283123d8d7ec95b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
