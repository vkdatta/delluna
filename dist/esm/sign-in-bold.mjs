export const name="sign-in-bold";
export const id="dl_a45a337c49497ed66671";
export const url=new URL("../icons/sign-in-bold.svg?v=01785555d8dfa503e0fad331d53b7faf3138ecb4f3c2a54bdc229ca2838d034b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
