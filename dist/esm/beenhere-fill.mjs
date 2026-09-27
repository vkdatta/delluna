export const name="beenhere-fill";
export const id="dl_50f631412f58cf23fd42";
export const url=new URL("../icons/beenhere-fill.svg?v=95e79383fad072846009372b693731f3dd48b38d45bf9acbdcac1bc710ce57d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
