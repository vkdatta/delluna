export const name="file-csv-light";
export const id="dl_61f729be7f284974ad2a";
export const url=new URL("../icons/file-csv-light.svg?v=788bae0e55bdab2256a32151e868c9ad5129e569308413f88d57eaa72f7e6617",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
