export const name="deskphone";
export const id="dl_2fc37aa11a9ce633b1d0";
export const url=new URL("../icons/deskphone.svg?v=5156d2d1da20a9f0b9d24ffe9bb7efe5a79275d1b7f709889d6c750cceb682b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
