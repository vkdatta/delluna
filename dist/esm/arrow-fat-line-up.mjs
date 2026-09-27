export const name="arrow-fat-line-up";
export const id="dl_ed7400738cf941fd8b15";
export const url=new URL("../icons/arrow-fat-line-up.svg?v=1380c149f7654f35d068f388ccdee377fa7c782986d258bc62e0864bb350743a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
