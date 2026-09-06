export const name="arrow-square-up-left-bold";
export const id="dl_df6eb8b49fc5456ca39c";
export const url=new URL("../icons/arrow-square-up-left-bold.svg?v=1f70c378f4d064ff5e6b59a37d27ab20f96e79f29787507a700631b562aecc76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
