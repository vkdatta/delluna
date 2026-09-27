export const name="twitter-logo-bold";
export const id="dl_e5008e8d1dd4a74a1be0";
export const url=new URL("../icons/twitter-logo-bold.svg?v=a025eef616bf4cd643c9f51193a450c6b53c437b5b829f3e12b0a65e9153cb45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
