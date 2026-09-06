export const name="file-bold";
export const id="dl_34a477f0ec024220b171";
export const url=new URL("../icons/file-bold.svg?v=b74d67f0af33fc62e83fbb2c7c8189f37713f482f06685088d46f8592f0e660f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
