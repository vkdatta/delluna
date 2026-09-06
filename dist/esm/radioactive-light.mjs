export const name="radioactive-light";
export const id="dl_b874dbea56ad409e8afb";
export const url=new URL("../icons/radioactive-light.svg?v=a137c37897f87d65d1035ee0b565cd87b024115d764f6d6d836010a988b39658",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
