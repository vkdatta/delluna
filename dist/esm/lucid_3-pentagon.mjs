export const name="lucid_3-pentagon";
export const id="dl_904616fe50cd4e3c8da2";
export const url=new URL("../icons/lucid_3-pentagon.svg?v=2e2164d888e89821937473b05e41ce2fdfe51d3f3911c27ab19f09c870abee6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
