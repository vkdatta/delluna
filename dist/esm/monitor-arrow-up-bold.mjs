export const name="monitor-arrow-up-bold";
export const id="dl_69961bf6638b4c80bb5f";
export const url=new URL("../icons/monitor-arrow-up-bold.svg?v=16082af7c44d5e2c67306cc2eec360cc1a6093261e2c45c6f95d375ab2bc39ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
