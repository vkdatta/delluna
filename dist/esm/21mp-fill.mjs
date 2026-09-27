export const name="21mp-fill";
export const id="dl_e9ef57ab77b0eb500611";
export const url=new URL("../icons/21mp-fill.svg?v=136cb91aa6e4638e8ac8020ca86cf28cfd6accbd9ef160be6efd677735215c08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
