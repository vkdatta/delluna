export const name="currency-eth-thin";
export const id="dl_68c6968463ba466683c6";
export const url=new URL("../icons/currency-eth-thin.svg?v=50d05ebb56059dcf2eaf0cf84dce09d1e78cdc8583c5f4d8dcd1b2b5913d4e5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
