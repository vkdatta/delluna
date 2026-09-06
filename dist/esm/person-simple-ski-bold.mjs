export const name="person-simple-ski-bold";
export const id="dl_45471e4b097044cc87d0";
export const url=new URL("../icons/person-simple-ski-bold.svg?v=f4f76dd9efdbb44447c17814301406417e7089cbffab5cf055458754a22fcc10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
