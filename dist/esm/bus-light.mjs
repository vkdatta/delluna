export const name="bus-light";
export const id="dl_8850583db6d24cea9ccb";
export const url=new URL("../icons/bus-light.svg?v=c6e186e42e6dbb5635aded075b5d2258f617b24f42fcb430802f81c2d316e2ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
