export const name="text-h-three-bold";
export const id="dl_8e6dcd941a494959bfd2";
export const url=new URL("../icons/T/text-h-three-bold.svg?v=49f0e6075a2a6dbbbc6b870b44e3febee76391b63fe8048c0c7911caa6ae9b76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
