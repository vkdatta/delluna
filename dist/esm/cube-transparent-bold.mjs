export const name="cube-transparent-bold";
export const id="dl_6e26f118b04e402aa4c5";
export const url=new URL("../icons/cube-transparent-bold.svg?v=ba7931c6adb6db03b167f52408af2cd5e467196e9cb6f571bd0159617167bd30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
