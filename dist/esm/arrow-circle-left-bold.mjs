export const name="arrow-circle-left-bold";
export const id="dl_387568d167074018a82d";
export const url=new URL("../icons/arrow-circle-left-bold.svg?v=85f43209b35b8a8a1d8140a02db2eea9be5a35608df3acc8e219e22c87c307af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
