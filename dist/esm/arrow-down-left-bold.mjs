export const name="arrow-down-left-bold";
export const id="dl_76ba3e8b77c046e9abe7";
export const url=new URL("../icons/arrow-down-left-bold.svg?v=1bd6735ec9c10a8bd26f8f2c1dfba6e9e9e27aafa1fc32923c53edd9dc51e4b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
