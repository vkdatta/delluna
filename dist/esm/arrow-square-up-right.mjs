export const name="arrow-square-up-right";
export const id="dl_d69f4ef324f24536bf11";
export const url=new URL("../icons/arrow-square-up-right.svg?v=c10e808077dd15cc9c3908b400cf20ab4ba895b8ffb985e0aece243e3fbeb092",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
