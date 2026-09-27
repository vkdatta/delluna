export const name="coin-bold";
export const id="dl_3bb050bbc1cb41d48a93";
export const url=new URL("../icons/coin-bold.svg?v=98e9ac63c425f6ef5cafac8f0689e599501ddc90439f2256e064cdd5b887e20a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
