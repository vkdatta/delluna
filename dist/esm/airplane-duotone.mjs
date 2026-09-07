export const name="airplane-duotone";
export const id="dl_f0e2de3582e94136a776";
export const url=new URL("../icons/airplane-duotone.svg?v=d884c809a59d317ed296679bb3039504b7af0b78d69d3c2cac7006e2bbbae35b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
