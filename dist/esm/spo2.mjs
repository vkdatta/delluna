export const name="spo2";
export const id="dl_3eff287aaa353483e825";
export const url=new URL("../icons/spo2.svg?v=d7e63b83fd00752d064157098f8c041bad4f960e4c4c74487772612822fce040",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
