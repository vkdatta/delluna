export const name="troubleshoot-fill";
export const id="dl_191520e36f22f017d5fe";
export const url=new URL("../icons/troubleshoot-fill.svg?v=6b0e9fe7eac93099e88aa3205b27c2cac1b2c14c045a6b60501ad6addc5c997b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
