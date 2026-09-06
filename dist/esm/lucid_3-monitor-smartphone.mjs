export const name="lucid_3-monitor-smartphone";
export const id="dl_c86bd0bb90fb48f197eb";
export const url=new URL("../icons/lucid_3-monitor-smartphone.svg?v=4e5c7958932d03b80af437d5fe4ab2ef717f85fae39cf270ae38fbcada53397f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
