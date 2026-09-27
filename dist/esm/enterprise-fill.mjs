export const name="enterprise-fill";
export const id="dl_1eed15d45a15279a408b";
export const url=new URL("../icons/enterprise-fill.svg?v=72ad8ace9a4fdf28fa4fec7f5c9382af63bfbfab5573897c4ae29038904b0ac9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
