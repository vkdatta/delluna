export const name="train-bold";
export const id="dl_7fb354f580724f0da560";
export const url=new URL("../icons/T/train-bold.svg?v=2d781d22e3d822f02080724aaed5ddcf9bc60a20fe97e1746c77c9e20a76786d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
