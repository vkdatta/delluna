export const name="ear-bold";
export const id="dl_2e56dd4ccceb409f86ec";
export const url=new URL("../icons/ear-bold.svg?v=fd248a6ddb95bd29041f16a23136d77597623f0fd8763693ea1212aea3e11f7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
