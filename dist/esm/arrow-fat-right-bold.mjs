export const name="arrow-fat-right-bold";
export const id="dl_77be4270ccfb4d0ba846";
export const url=new URL("../icons/arrow-fat-right-bold.svg?v=918d33eed8c90a3140f3a2238305b15aeceb8cf10896a70d83f5af752ec8958d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
