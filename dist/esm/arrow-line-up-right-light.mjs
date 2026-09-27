export const name="arrow-line-up-right-light";
export const id="dl_82d922d472ab4ba3b98c";
export const url=new URL("../icons/arrow-line-up-right-light.svg?v=c38e9c549445009bae0e90f6a8b626ded2c31f82d17debb5127a965f87edbb8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
