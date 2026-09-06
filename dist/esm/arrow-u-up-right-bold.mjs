export const name="arrow-u-up-right-bold";
export const id="dl_f02a0bef0a594ac887eb";
export const url=new URL("../icons/arrow-u-up-right-bold.svg?v=b5728e7fea705bf84dec2d0504fb91e1c53b3246f34592da76e94e4792dd1feb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
