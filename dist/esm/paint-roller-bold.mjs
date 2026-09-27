export const name="paint-roller-bold";
export const id="dl_b057d176e86943b791d7";
export const url=new URL("../icons/paint-roller-bold.svg?v=81f4fa90d5d9edee6360640a59280da936cbe314121b8c5e45c04c839579304e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
