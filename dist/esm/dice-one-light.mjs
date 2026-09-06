export const name="dice-one-light";
export const id="dl_ec61e488d1d945239a65";
export const url=new URL("../icons/dice-one-light.svg?v=c1fbaaff3ef5641d9dcad21871bcdb7a9fd2568a3c05f12f17a30d0a6b0a31f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
