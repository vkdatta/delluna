export const name="building-office-fill";
export const id="dl_6b24f163f42343008cca";
export const url=new URL("../icons/building-office-fill.svg?v=093cc4e2a5b574447b2261cd2af21e930d06a456b2687533fb60ac5b258d5d5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
