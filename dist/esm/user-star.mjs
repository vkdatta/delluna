export const name="user-star";
export const id="dl_933018c9ed7841a49ef3";
export const url=new URL("../icons/user-star.svg?v=ac9c1b5efe03be012202d7681ce9b490871dc2e79b521eb35c9aa25a407db1cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
