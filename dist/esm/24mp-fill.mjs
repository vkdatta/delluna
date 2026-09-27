export const name="24mp-fill";
export const id="dl_4f790cf534f510ec7111";
export const url=new URL("../icons/24mp-fill.svg?v=10661117a06f11360faa2175ff573af43cfd7a44ec7f20a51aee943950488f49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
