export const name="cpu-fill";
export const id="dl_bd2c0dad604e40cc9672";
export const url=new URL("../icons/cpu-fill.svg?v=18cd2654199b89893e8ec44bf7aea4a862b52889f4fcbd52cf6fd1de4d710109",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
