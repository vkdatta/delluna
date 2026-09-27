export const name="text-align-center-bold";
export const id="dl_17c7266d47888d54ede2";
export const url=new URL("../icons/text-align-center-bold.svg?v=a129379dce4978989dab6713716e751d2073b771cd84d7593fdc1c94514d0ec8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
