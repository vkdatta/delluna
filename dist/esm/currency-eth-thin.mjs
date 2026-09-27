export const name="currency-eth-thin";
export const id="dl_68c6968463ba466683c6";
export const url=new URL("../icons/currency-eth-thin.svg?v=2375d4d89858e6026e203ce59dbb910515d17ca13db23f20bb8ae5ced440b446",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
