export const name="arrow-fat-line-up-bold";
export const id="dl_d8660bbb3b0c45c79851";
export const url=new URL("../icons/arrow-fat-line-up-bold.svg?v=d18a3db8c5854bd5251dc85785b1081dd746735f856078cb505af13264d9fff2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
