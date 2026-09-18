export const name="hd";
export const id="dl_e829db2687e943e3b342";
export const url=new URL("../icons/hd.svg?v=40dbebfe8f7cfac735dced841aa95341f200a39e9d21a949ea524568ce588bcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
